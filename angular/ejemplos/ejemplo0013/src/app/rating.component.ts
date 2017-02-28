import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input("valor-rating")
  private rating: number = 0;
  @Input()
  private revisiones = 0;
  private estrellas: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }
  onClick(valor) {
    this.rating = valor;
  }
}
