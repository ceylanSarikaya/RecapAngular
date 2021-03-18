import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { RentaldtoComponent } from './components/rentaldto/rentaldto.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CardtoComponent,
    RentaldtoComponent,
    ColorComponent,
    BrandComponent,
    NaviComponent,
    CardetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
