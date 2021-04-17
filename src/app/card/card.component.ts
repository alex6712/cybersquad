import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../game/game.component';

export interface Card {
  title: string;
  content: string;

  imageURL: string;

  character: Character;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  ngOnInit(): void {
  }

  returnCharacter(): void {
    console.log(this.card.character);
  }
}
