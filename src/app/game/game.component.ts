import {Component, Input, OnInit} from '@angular/core';

export class Armor {
  equipped: false;

  armor: number;

  constructor(armor: number) {
    if (armor < 0 || armor > 100) { throw new Error('Unavailable value of \'armor\' argument: ' + armor.toString()); }
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

  constructor(name: string) {
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

  ngOnInit(): void {
  }

}
