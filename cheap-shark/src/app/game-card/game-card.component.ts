import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Deal } from '../interfaces/deal-interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() deal?: Deal;

  constructor() { }

  ngOnInit(): void {
  }

}
