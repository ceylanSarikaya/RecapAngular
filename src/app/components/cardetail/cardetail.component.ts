import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/cardto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/cardtoService';
import { CarImageService } from 'src/app/services/carImageService';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
 
  car: Car;
  carImages: CarImage[] = [];
  dataLoaded = false;
  carId: number;
  currentImage: CarImage;
  constructor(private carImageService: CarImageService, private carService: CarService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImage(params["carId"])
        this.getCar(params["carId"])
      }


    })
  }
  getCarImage(carId: number) {
    this.carImageService.getCarImage(carId).subscribe(response => {
      this.carImages = response.data;
      this.currentImage = this.carImages[0];
    });
  }
  getCar(carId: number) {
    this.carService.getCar(carId).subscribe(response => {
      this.car = response.data;
      this.dataLoaded = true;
    });
    
  }
  getCarImageClass(carImage: CarImage) {

    if (this.currentImage == carImage) {
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
}
