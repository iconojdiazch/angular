// Importar componentes y módulos para el routing 
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PaisesComponent } from './paises/paises.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

import { ActivateGuardService } from './activate-guard.service';
import { DeactivateGuardService } from './deactivate-guard.service';

// Configuración de las rutas
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/paises',
        pathMatch: 'full'
    },
    {
        path: 'paises', component: PaisesComponent, canDeactivate: [DeactivateGuardService]
    },
    { path: 'ciudades', component: CiudadesComponent, canActivate: [ActivateGuardService] },
    { path: 'la-ciudad/:id', component: CiudadesComponent },
    { path: '**', component: NoEncontradoComponent }
];

export const routing = RouterModule.forRoot(appRoutes);