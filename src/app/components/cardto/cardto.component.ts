import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/cardto';
import { CarService } from 'src/app/services/cardtoService';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {
  cars:Car[]=[];
  dataLoaded = false;
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params["colorId"]){
      this.getCarsByColor(params["colorId"])
    }
    else if(params["brandId"]){
this.getCarsByBrand(params["brandId"])
    }
    else{
      this.getCars()
    }
  })
  }
  getCars(){
    this.carService.getCars().subscribe(response  => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response  => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(colorId,this.cars,response.data)
    });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response  => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(brandId,this.cars,response.data)
    });
  }
  
}
