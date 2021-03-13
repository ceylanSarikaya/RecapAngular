  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardtoResponseModel } from '../models/cardtoResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:5001/api/cars/getcardetaildtos";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CardtoResponseModel>{
    return this.httpClient.get<CardtoResponseModel>(this.apiUrl);
  }
}