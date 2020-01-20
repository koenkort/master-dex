import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';
import { TypeService } from '../../services/pokemon/get-pokemon-type.service';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { Type } from 'src/app/models/interfaces/Type';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[];
  chosenPokemon: Pokemon;
  types: Type;
  showModel: boolean = false;
  activePokemonId: number;
  activePokemon: Pokemon;

  constructor(private PokemonService: PokemonService, private TypeService: TypeService) {
  }

  closeModel(): void {
    this.activePokemon = undefined;
  }

  openModel(pokemon: Pokemon): void {
    if(this.activePokemonId !== pokemon.id) {
      this.activePokemon = pokemon;
      this.activePokemonId = pokemon.id;
    } else {
      this.activePokemonId = undefined;
    }

  }

  getData():void {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
    this.TypeService.getType().subscribe(types => {this.types = types});
  }

  ngOnInit() {
    this.getData();
  }
}
