import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RenderComponent } from './render/render.component';
import { BotonNavegacionComponent } from './boton-navegacion/boton-navegacion.component';
import { ConfirmarDirective } from './confirmar.directive';

@NgModule({
  declarations: [
    AppComponent,
    RenderComponent,
    BotonNavegacionComponent,
    ConfirmarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
