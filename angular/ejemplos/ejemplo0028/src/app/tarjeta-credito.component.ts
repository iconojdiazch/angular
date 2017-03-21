import { Component, OnInit } from '@angular/core';

import { TarjetaCreditoService } from './tarjeta-credito.service';

@Component({
  selector: 'tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  private numeroTarjeta: string;

  constructor(private tc: TarjetaCreditoService) { }

  ngOnInit() {
    this.numeroTarjeta = this.tc.getTarjeta();
  }

}
