import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CatchedComponent } from './catched.component';

const Components = [
  CatchedComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [
  ],
  exports:  [...Components],
  schemas: []
})
export class CatchedModule { }
