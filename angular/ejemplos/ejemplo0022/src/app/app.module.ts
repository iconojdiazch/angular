import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaisesComponent } from './paises/paises.component';
import { CiudadesComponent } from './ciudades/ciudades.component';

import { routing, appRoutingProviders } from './app.routing';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

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
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
