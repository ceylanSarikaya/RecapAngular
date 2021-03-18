import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:5001/api";

  constructor(private httpClient:HttpClient) { }

  getCarImage(carId:number):Observable<ListResponseModel<CarImage>>{

    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl + '/carImages/getcarbyId?carId='+ carId);
  }
}