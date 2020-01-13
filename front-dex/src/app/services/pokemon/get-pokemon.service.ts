import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    getPokemon(): Observable<Pokemon[]> {
        const pokemonData: Observable<Pokemon>[] = [];
        for(let i = 1; i < 151; i++) {
            pokemonData.push(this.http.get<Pokemon>(`http://pokeapi.co/api/v2/pokemon/${i}`));
        }
        return zip(...pokemonData);
    }

    constructor(private http: HttpClient){
    }
}
