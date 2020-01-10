import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FavouriteComponent } from './favourite.component';

const Components = [
  FavouriteComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
  ],
  exports:  [...Components],
  schemas: []
})
export class FavouriteModule { }
