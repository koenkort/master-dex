import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    getPokemon(){
        return this.http.get(`http://pokeapi.co/api/v2/pokemon`)
    }

    constructor(private http: HttpClient){
    }
}
