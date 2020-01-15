import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'


// Components
import { CardComponent } from './card/card.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CaughtComponent } from './caught/caught.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonFilterPipe } from '../pipes/pokemon-filter.pipe'

const Components = [
    CardComponent,
    FavouriteComponent,
    CaughtComponent,
    PokemonFilterPipe,
    PokemonDetailComponent,
]

@NgModule({
    declarations: [...Components],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [...Components],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
