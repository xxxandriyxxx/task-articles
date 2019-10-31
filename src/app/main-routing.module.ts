import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesComponent} from './components/articles/articles.component';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './components/cart/cart.component';


const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'basket', component: CartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
