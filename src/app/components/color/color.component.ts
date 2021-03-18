import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/colorService';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor:Color;
  dataLoaded = false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response  => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
    
  }
  setCurrentColor(color:Color){
this.currentColor=color;
  }
  getCurrentColorClass(color:Color){
if(color==this.currentColor){
 return "btn btn-primary m-2"
}
else{
  return "btn btn-light m-2 mt-0 "
}
  }
}
