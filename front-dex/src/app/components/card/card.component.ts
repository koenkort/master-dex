import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;

  pokemonUrl: string;

  constructor() { }

  ngOnInit() {
    this.createUrl();
  }

  createUrl() {
    let index = this.pokemon.url.split("/");
    this.pokemonUrl = `https://pokeres.bastionbot.org/images/pokemon/${index[6]}.png`;
  }
}