import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brandService';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
brands:Brand[]=[];
currentBrand:Brand;
emptyBrand:Brand;
dataLoaded = false;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response  => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
      }
      getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return 'btn btn-primary  m-2 ';
    }
    else{
      return 'btn btn-light m-2 ';
    }
      }
      setBrandAll(){
this.currentBrand=this.emptyBrand 
      }
      getBrandAll(){
        if(this.currentBrand==this.emptyBrand){
          return 'btn btn-primary form-control ';
         }
         else{
          return 'btn btn-light form-control';
         }
      }
}
