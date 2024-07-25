import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMenuComponent } from './menu/components/all-menu/all-menu.component';
import { MenuDetailsComponent } from './menu/components/menu-details/menu-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"menu", component:AllMenuComponent},
  {path:"details/:id", component:MenuDetailsComponent},
  {path:"carts" , component:CartComponent},
  {path:"**", redirectTo:"menu", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
