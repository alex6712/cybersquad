import { Component } from '@angular/core';
import { Card } from './card/card.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewProject';

  characters: Card[] = [
    {title: 'Воин', content: 'Защита персональных данных и обеспечение конфиденциальности', imageURL: '../assets/img/warrior.png'},
    {title: 'Призыватель', content: 'Программирование', imageURL: '../assets/img/summoner.png'},
    {title: 'Маг', content: 'Управление данными, информацией и цифровым контентом', imageURL: '../assets/img/mage.png'},

  ];
}
