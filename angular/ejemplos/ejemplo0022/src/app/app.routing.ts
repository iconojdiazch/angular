// Importar componentes y módulos para el routing 
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { PaisesComponent } from './paises/paises.component';
import { CiudadesComponent } from './ciudades/ciudades.component';

// Configuración de las rutas
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/paises',
        pathMatch:'full'
    },
    { path: 'paises', component: PaisesComponent },
    { path: 'ciudades', component: CiudadesComponent },
    { path: 'la-ciudad/:id', component: CiudadesComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);