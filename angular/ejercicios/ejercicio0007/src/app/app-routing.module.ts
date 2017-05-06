import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/primero', pathMatch: 'full'
  },
  {
    path: 'primero', component: PrimeroComponent
  },
  {
    path: 'segundo', component: SegundoComponent
  },
  {
    path: '**', component: NoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
