import { Component, Input, OnInit } from '@angular/core';
import {Character, Building, Enemy} from '../game/game.component';

export interface CharacterCard {
  title: string;
  content: string;

  character: Character;
}

export interface BuildingCard {
  title: string;
  content: string;

  building: Building;
}

export interface Task {
  inProgress: boolean;
  title: string;
  content: string;
  requirements: string;
  help: string;

  enemy: Enemy;

  answer: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;

  hasImageURL(): boolean {
    return this.card.hasOwnProperty('character') || this.card.hasOwnProperty('building');
  }

  isTask(): boolean {
    return this.card.hasOwnProperty('requirements');
  }

  getRequirements(): string {
    if (!this.isTask()) { throw new Error('Not a Task!'); }
    return this.card.requirements;
  }

  getImageURL(): string {
    if (this.card.hasOwnProperty('character')) { return this.card.character.imageURL; }
    if (this.card.hasOwnProperty('building')) { return this.card.building.imageURL; }
    throw new Error('Unexpected type of \'card\'. Expected CharacterCard or BuildingCard, got ' + this.card.type);
  }

  ngOnInit(): void {
  }
}
