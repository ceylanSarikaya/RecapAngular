import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CardtoComponent } from './components/cardto/cardto.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CardtoComponent},
  {path:"cars",component:CardtoComponent},
  {path:"cars/color/:colorId",component:CardtoComponent},
  {path:"cars/brand/:brandId",component:CardtoComponent},
  {path:"cars/details/:carId",component:CardetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
