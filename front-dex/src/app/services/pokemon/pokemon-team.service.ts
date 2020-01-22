import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokemonTeamService {

  caughtPokemon() {
    console.log('caught');
  }

  constructor() { }
}
