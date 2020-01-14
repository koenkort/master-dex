import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import Pokemon from 'src/app/models/interfaces/Pokemon';


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    getPokemon(): Observable<Pokemon[]> {
        const noGen = 0;
        const genOne = 151;
        const genTwo = 251;
        const genThree = 386;
        const genFour = 493;
        const genFive = 649;
        const genSix = 721;
        const genSeven = 807;
        const pokemonData: Observable<Pokemon>[] = [];

        for(let i = noGen+1; i <= genOne; i++) {
            pokemonData.push(this.http.get<Pokemon>(`http://pokeapi.co/api/v2/pokemon/${i}`));
        }
        return zip(...pokemonData);
    }

    constructor(private http: HttpClient){
    }
}
