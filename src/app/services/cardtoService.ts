  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/cardto';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';




@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:5001/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/getcardetaildtos"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/GetCarsColorIdDtos?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/GetCarsBrandIdDtos?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCar(carId:number):Observable<ObjectResponseModel<Car>>{
    let newPath =this.apiUrl +"cars/GetCarIdDto?carId="+carId
    return this.httpClient.get<ObjectResponseModel<Car>>(newPath);
  }
}