import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Pokemon from 'src/app/models/interfaces/Pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.pokemon)
  }

  closeModal() {
    this.close.emit();
  }

}
