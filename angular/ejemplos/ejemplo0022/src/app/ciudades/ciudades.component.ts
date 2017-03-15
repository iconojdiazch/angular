import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  public codigoPostal: number;
  private susbcripcion;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Recogemos los parametros de la URL
    this.susbcripcion = this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.codigoPostal = params['id'];
      }
    });
  }
  ngOnDestroy() {
    this.susbcripcion.unsubscribe();
  }
  
  redirigir(): void {
    this.router.navigate(['/paises']);
  }
}
