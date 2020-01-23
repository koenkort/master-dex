import { Component } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';
import { PokemonTeamService } from 'src/app/services/pokemon/pokemon-team.service';

@Component({
  selector: 'app-teambuilder',
  templateUrl: './teambuilder.component.html',
  styleUrls: ['./teambuilder.component.scss']
})
export class TeambuilderComponent {
  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonTeamService){}

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    console.log('getdata()');
    this.pokemons = this.pokemonService.getCaughtPokemon();
  }

  toggleModal() {
    console.log('HI');
  }

  ngDoCheck(): void {
    console.log('do check');
    //this.getData();
  }

}
