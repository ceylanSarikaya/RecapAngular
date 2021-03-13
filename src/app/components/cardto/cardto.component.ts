import { Component, OnInit } from '@angular/core';
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
  constructor(private brandService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.brandService.getCars().subscribe(response  => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
