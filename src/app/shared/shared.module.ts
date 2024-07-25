import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import{HttpClientModule} from "@angular/common/http";
import { SelectComponent } from './components/select/select.component'
@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ]
})
export class SharedModule { }
