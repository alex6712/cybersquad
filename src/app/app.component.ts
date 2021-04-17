import { Component } from '@angular/core';
import { Card } from './card/card.component.js';
import { Character } from './game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  character: Character;

  title = 'NewProject';

  characters: Card[] = [
    {
      title: 'Воин',
      content: 'Защита персональных данных и обеспечение конфиденциальности',
      imageURL: '../assets/img/warrior.png',
      character: new Character('Хуета')
    },
    {
      title: 'Призыватель',
      content: 'Программирование',
      imageURL: '../assets/img/summoner.png',
      character: new Character('Пизда')
    },
    {
      title: 'Маг',
      content: 'Управление данными, информацией и цифровым контентом',
      imageURL: '../assets/img/mage.png',
      character: new Character('Ебанашка')
    },

  ];

  constructor() {
    this.character = null;
  }

  setCharacter(character: Character): void {
    this.character = character;
  }
}
