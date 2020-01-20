import { Component, OnInit, Input } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon:Pokemon;

  constructor() { }

  ngOnInit() {
    console.log(this.pokemon);
  }

}
