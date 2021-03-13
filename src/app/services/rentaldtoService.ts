import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentaldtoResponseModel } from '../models/rentaldtoResponseModel';



@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:5001/api/rentals/getrentaldetaildtos";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentaldtoResponseModel>{
    return this.httpClient.get<RentaldtoResponseModel>(this.apiUrl);
  }
}