import { Injectable } from '@angular/core';

import { CanDeactivate } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';

@Injectable()
export class DeactivateGuardService implements CanDeactivate<PaisesComponent>{

  constructor() { }

  canDeactivate(p: PaisesComponent) {
    console.log('canDeactivate en DeactivateGuardService invocado');
    return confirm("¿Está usted seguro?");
  }
}
