import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../card/card.component';
import {NgForm} from '@angular/forms';
import {AppComponent} from '../app.component';

export class Armor {
  equipped: false;

  armor: number;

  constructor(armor: number) {
    if (armor < 0 || armor > 100) { throw new Error('Unavailable value of \'armor\' argument: ' + armor); }
    this.armor = armor;
  }
}

class Helmet extends Armor {
}

class Bracers extends Armor {
}

class Boots extends Armor {
}

class Shield extends Armor {
}

export class Weapon {
  damage: number;

  constructor(damage: number) {
    this.damage = damage;
  }
}

class Sword extends Weapon {
}


export class Character {
  name: string;

  imageURL: string;

  level: number;
  experience: number;

  maxHealthPoints = 100;
  healthPoints = 100;

  maxManaPoints = 100;
  manaPoints = 100;

  equipment: {
    head: Helmet;
    arms: Bracers;
    body: Armor;
    legs: Boots;
    rightHand: any;
    leftHand: any;
  };

  constructor(name: string, imageURL: string) {
    this.changeName(name);

    this.imageURL = imageURL;

    this.level = 1;
    this.experience = 0;

    this.equipment = {
      head: new Helmet(0),
      arms: new Bracers(1),
      body: new Armor(2),
      legs: new Boots(0),
      rightHand: new Sword(10),
      leftHand: new Shield(0)
    };
  }

  getDamage(): number {
    let damage = 0;

    for (const equipmentKey in this.equipment) {
      if (!(this.equipment.hasOwnProperty(equipmentKey) && this.equipment[equipmentKey].hasOwnProperty('damage'))) { continue; }
      damage += this.equipment[equipmentKey].armor;
    }

    return damage;
  }

  getArmor(): number {
    let armor = 0;

    for (const equipmentKey in this.equipment) {
      if (!(this.equipment.hasOwnProperty(equipmentKey) && this.equipment[equipmentKey].hasOwnProperty('armor'))) { continue; }
      armor += this.equipment[equipmentKey].armor;
    }

    return armor;
  }

  changeName(name: string): void {
    if (name.length > 25) { throw new Error('The length of character\'s name can\'t be more than 25 symbols!'); }
    this.name = name;
  }

  experienceUp(value: number): void {
    this.experience += value;
  }

  levelUp(): void {
    this.level++;

    this.maxHealthPoints += 20;
    this.maxManaPoints += 20;

    this.healthPoints = this.maxHealthPoints;
    this.manaPoints = this.maxManaPoints;
  }
}

export class Building {
  name: string;

  imageURL: string;

  constructor(name: string, imageURL: string) {
    this.name = name;
    this.imageURL = imageURL;
  }
}

export class Enemy {
  name: string;

  imageURL: string;

  level: number;

  maxHealthPoints = 100;
  healthPoints = 100;

  damage: number;
  armor: number;

  constructor(name: string, imageURL: string) {
    this.changeName(name);

    this.imageURL = imageURL;

    this.damage = 5;
    this.armor = 5;
  }

  changeName(name: string): void {
    if (name.length > 25) { throw new Error('The length of character\'s name can\'t be more than 25 symbols!'); }
    this.name = name;
  }
}



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() character: Character;
  @Input() building: Building;

  enemy: Enemy = new Enemy('Elk Cloner', '../assets/img/enemy.png');

  tasks: Task[] = [];
  currentTask: Task = {
    inProgress: true,
    title: 'Монстры!',
    content: 'Недавно в лесу появились новые вирусы. Проверьте близлежащие окрестности и разберитесь с проблемой.',
    requirements: 'Один экземпляр Elk Cloner.',
    help: '',
    enemy: this.enemy,
    answer: 2
  };

  answer: number;
  win: boolean;

  addTask(title: string, content: string, requirements: string, help: string, enemy: Enemy): void {
    this.tasks.push({
      inProgress: false,
      title,
      content,
      requirements,
      help,
      enemy,
      answer: 2
    });
  }

  setCurrentTask(task: Task): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.currentTask = task;
    this.currentTask.inProgress = true;
    this.enemy = this.currentTask.enemy;
  }

  setAnswer(value: number): void {
    this.answer = value;
  }

  checkAnswer(): void {
    if (this.answer === this.currentTask.answer) {
      this.win = true;
      this.enemy.healthPoints = 0;
    }
  }

  ngOnInit(): void {
    this.addTask(
      'Монстры!',
      'Недавно в лесу появились новые вирусы. Проверьте близлежащие окрестности и разберитесь с проблемой.',
      'Один экземпляр Elk Cloner.',
      '',
      new Enemy('Elk Cloner', '../assets/img/enemy.png')
    );
  }
}
