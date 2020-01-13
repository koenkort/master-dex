import { Component, OnInit, Input } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon;

  pokemonUrl: string;

  constructor() { }

  ngOnInit() {
  }
}