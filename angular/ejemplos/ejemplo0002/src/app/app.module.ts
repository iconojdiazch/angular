import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {ProductoComponent} from './producto/producto.component';
import {Producto1Component} from './producto1/producto1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    Producto1Component
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
