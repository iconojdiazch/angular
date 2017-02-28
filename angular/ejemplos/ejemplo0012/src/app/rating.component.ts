import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  private rating: number = 0;
  private estrellas:number[]=[1,2,3,4,5];
  
  onClick(valor: number) {
    this.rating = valor;
  }
  constructor() { }

  ngOnInit() {
  }

}
