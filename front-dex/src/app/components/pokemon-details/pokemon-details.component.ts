import { Component, OnInit, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss', '../card/card.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  cardComponent = new CardComponent();
  @Input() pokemon:Pokemon;

  constructor() { }

  ngOnInit() {
    console.log(this.pokemon);
  }

}
