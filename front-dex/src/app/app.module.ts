import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteModule } from '../app/components/favourite/favourite.module';
import { CatchedModule } from '../app/components/catched/catched.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavouriteModule,
    CatchedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
