import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/get-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemon;
  constructor(private PokemonService: PokemonService) { 

  }

  ngOnInit() {
    this.pokemon =  this.PokemonService.getPokemon()
    console.log(this.pokemon)
  }
}
