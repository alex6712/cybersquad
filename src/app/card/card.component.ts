import { Component, Input, OnInit } from '@angular/core';
import { Character, Building } from '../game/game.component';

export interface CharacterCard {
  title: string;
  content: string;

  imageURL: string;

  character: Character;
}

export interface BuildingCard {
  title: string;
  content: string;

  imageURL: string;

  building: Building;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;

  ngOnInit(): void {
  }
}
