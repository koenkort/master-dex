import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.scss']
})
export class TeambuilderComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private PokemonService: PokemonService){}

  getData():void {
    this.PokemonService.getPokemon().subscribe(pokemons => this.pokemons = pokemons)
  }

  ngOnInit() {
    this.getData();
  }

}
