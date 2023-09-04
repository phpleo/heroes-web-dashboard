import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './ui-pages/layout-page/layout-page.component';
import { NewPageComponent } from './ui-pages/new-page/new-page.component';
import { SearchPageComponent } from './ui-pages/search-page/search-page.component';
import { ListPageComponent } from './ui-pages/list-page/list-page.component';
import { HeroPageComponent } from './ui-pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    // localhost:4200/heroes/''
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
