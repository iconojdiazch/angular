import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';

import {TarjetaCreditoService} from './tarjeta-credito.service';
import { TarjetaCreditoPipe } from './tarjeta-credito.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    TarjetaCreditoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TarjetaCreditoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
