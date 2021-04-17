import {Component, Input, OnInit} from '@angular/core';

export interface Card {
  title: string;
  content: string;

  imageURL: string;
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
}
