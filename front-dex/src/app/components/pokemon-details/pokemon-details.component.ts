import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../card/card.component';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss', '../card/card.component.scss']
})


export class PokemonDetailsComponent implements OnInit {
  cardComponent = new CardComponent();
  @Output() toggleModel: EventEmitter<any> = new EventEmitter();
  @Input() pokemon:Pokemon;

  constructor() { }

  ngOnInit() {
    this.pokemon.height = this.pokemon.height / 10;
  }

  closeModel() {
    this.toggleModel.emit();
  }

  pokemonHeightCalculation() {
  }

}
