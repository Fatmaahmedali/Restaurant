// // import { NgModule } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment';
// import { AppComponent } from './app.component';
// import { MenuService } from './menu/Services/menu.service';
// import { SharedModule } from './shared/shared.module';
// import { MenuModule } from './menu/menu.module';
// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule,
//     FormsModule,
//     HttpClientModule,
//     AppRoutingModule,
//     SharedModule,
//     MenuModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFirestoreModule,
//     AngularFireStorageModule,
//   ],
//   providers: [
//     MenuService, // Provide your services here if they are meant to be application-wide singletons
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/node_modules/@angular/compiler'; 
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MenuService } from './menu/Services/menu.service';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MenuModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireStorageModule,
  ],
  providers: [
    MenuService, // Provide your services here if they are meant to be application-wide singletons
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
