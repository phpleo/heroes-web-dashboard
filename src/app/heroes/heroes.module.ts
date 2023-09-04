import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './ui-pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './ui-pages/layout-page/layout-page.component';
import { ListPageComponent } from './ui-pages/list-page/list-page.component';
import { NewPageComponent } from './ui-pages/new-page/new-page.component';
import { SearchPageComponent } from './ui-pages/search-page/search-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
