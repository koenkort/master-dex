import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;

  index: number;
  pokemonUrl: string;

  constructor() { }

  ngOnInit() {
    this.createUrl();
  }

  createUrl() {
    let splicedUrl = this.pokemon.url.split("/");
    this.index = splicedUrl[6];
    this.pokemonUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.index}.png`;
  }
}