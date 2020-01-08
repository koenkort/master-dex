import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'


// pages
import { HomeComponent } from './home/home.component';

// components
import { ComponentsModule } from '../components/components.module';


const Pages = [
    HomeComponent,
]

@NgModule({
    declarations: [...Pages],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule,
    ],
    exports: [...Pages],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
        
})
export class PagesModule { }
