import {Component} from '@angular/core';
import {CharacterCard, BuildingCard} from './card/card.component.js';
import {Building, Character} from './game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIGITAL SQUAD';

  characters: CharacterCard[] = [
    {
      title: 'Воин',
      content: 'Защита персональных данных и обеспечение конфиденциальности',
      character: new Character('alex6712', '../assets/img/warrior.png')
    },
    {
      title: 'Призыватель',
      content: 'Программирование',
      character: new Character('Naighten', '../assets/img/summoner.png')
    },
    {
      title: 'Маг',
      content: 'Управление данными, информацией и цифровым контентом',
      character: new Character('Soul-kun', '../assets/img/mage.png')
    }
  ];

  buildings: BuildingCard[] = [
    {
      title: 'Гильдия',
      content: 'Здесь можно получить задания на проверку вашей компетенции',
      building: new Building('Гильдия', '../assets/img/guild.png')
    },
    {
      title: 'Лес',
      content: 'Опасное место, в котором обитает множество противников',
      building: new Building('Лес', '../assets/img/forest.png')
    },
    {
      title: 'Город',
      content: 'Город, в котором постоянно что-то происходит... Сходи, проверь в гильдии, может, кому-то опять нужна помощь',
      building: new Building('Деревня', '../assets/img/country.png')
    }
  ];

  character: Character;
  building: Building;

  constructor() {
    this.character = null;
    this.building = null;
  }

  setCharacter(character: Character): void {
    this.character = character;
  }

  setBuilding(building: Building): void {
    this.building = building;
  }
}
