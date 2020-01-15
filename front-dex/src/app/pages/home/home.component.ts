import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';
import { PokemonFilterPipe } from '../../pipes/pokemon-filter.pipe'
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons;
  chosenPokemon: Pokemon;
  constructor(private PokemonService: PokemonService) {
  }

  ngOnInit() {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
  }

  selectedPokemon(pokemon: Pokemon) {
    this.chosenPokemon = pokemon;
  }

  close() {
    this.chosenPokemon = undefined;
  }
}
