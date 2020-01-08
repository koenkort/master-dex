import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  pokemons;
  constructor(private PokemonService: PokemonService) { 
  }

  ngOnInit() {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
  }
}
