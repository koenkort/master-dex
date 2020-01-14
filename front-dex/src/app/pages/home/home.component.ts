import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons;
  constructor(private PokemonService: PokemonService) {
  }

  ngOnInit() {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
  }

  selectedPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
}
