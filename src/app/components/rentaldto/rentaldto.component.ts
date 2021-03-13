import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rentaldto';
import { RentalService } from 'src/app/services/rentaldtoService';

@Component({
  selector: 'app-rentaldto',
  templateUrl: './rentaldto.component.html',
  styleUrls: ['./rentaldto.component.css']
})
export class RentaldtoComponent implements OnInit {
  rentals:Rental[]=[];
  dataLoaded = false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe((response)  => {
      this. rentals = response.data;
      console.log(response);
      this.dataLoaded = true;
    });
  }
}
