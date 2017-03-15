import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { CiudadesComponent } from './ciudades/ciudades.component';

import { routing } from './app.routing';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

import {ActivateGuardService} from './activate-guard.service';
import {DeactivateGuardService} from './deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    CiudadesComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ActivateGuardService, DeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
