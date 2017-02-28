import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating.component';
import { ProductoComponent } from './producto.component';
import { ProductosComponent } from './productos.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    ProductoComponent,
    ProductosComponent
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
