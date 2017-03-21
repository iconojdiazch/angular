import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

export const routing = RouterModule.forRoot([
    { path: '', component: UsuarioComponent },
    { path: 'nuevo', component: UsuarioFormComponent },
    { path: 'nuevo/:id', component: UsuarioFormComponent }
]);