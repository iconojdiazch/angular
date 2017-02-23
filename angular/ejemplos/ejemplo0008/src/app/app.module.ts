import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductoComponent } from './producto.component';

//Api remota simulada en memoria
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//Repositorio de objetos simulado
import { ServicioEnMemoria }  from './servicio-en-memoria';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ServicioEnMemoria)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
