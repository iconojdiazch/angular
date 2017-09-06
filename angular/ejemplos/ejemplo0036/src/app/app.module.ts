import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrigenComponent } from './origen/origen.component';
import { DestinoComponent } from './destino/destino.component';
import { ConexionService } from "./conexion.service";

@NgModule({
  declarations: [
    AppComponent,
    OrigenComponent,
    DestinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
