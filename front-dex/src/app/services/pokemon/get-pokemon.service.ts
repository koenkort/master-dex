import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PokemonResults from 'src/app/models/interfaces/PokemonResults';


@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    getPokemon(): Observable<PokemonResults[]> {
        return this.http.get<PokemonResults[]>(`http://pokeapi.co/api/v2/pokemon/?limit=151`)
    }

    constructor(private http: HttpClient){
    }
}
