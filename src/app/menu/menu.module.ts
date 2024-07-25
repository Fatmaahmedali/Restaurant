import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { AllMenuComponent } from './components/all-menu/all-menu.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../../app/menu/Services/menu.service'; // Adjust path as needed
import { SharedModule } from '../shared/shared.module';
import { MenusComponent } from './components/menus/menus.component';
import { CartsModule } from '../carts/carts.module';
import { AppRoutingModule } from '../app-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [AllMenuComponent, MenuDetailsComponent, MenusComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule,
    CartsModule,
    AppRoutingModule,

  ],
  exports:[AllMenuComponent,MenusComponent,MenuDetailsComponent],
  providers: [
    MenuService // Provide your service here if needed
  ]
})
export class MenuModule { }
