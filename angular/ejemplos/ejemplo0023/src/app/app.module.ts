import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RaizComponent } from './raiz/raiz.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { SpotifyComponent } from './spotify/spotify.component';

import {routing} from './app.routing';

import {SpotifyService} from './spotify.service';
import { ArtistaComponent } from './artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    RaizComponent,
    NoEncontradoComponent,
    SpotifyComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
