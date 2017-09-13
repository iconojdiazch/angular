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
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('En constructor de CiudadesComponent')
   }

  ngOnInit() {
    // Recogemos los parametros de la URL
    console.log('En ngOnInit de CiudadesComponent');
    this.susbcripcion = this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.codigoPostal = params['id'];
      }
    });
  }
  ngOnDestroy() {
    console.log('En ngOnDestroy de CiudadesComponent');
    this.susbcripcion.unsubscribe();
  }
  
  redirigir(): void {
    this.router.navigate(['/paises']);
  }
}
