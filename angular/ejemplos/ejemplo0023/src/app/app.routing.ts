import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaizComponent } from './raiz/raiz.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { SpotifyComponent } from './spotify/spotify.component';

import { ArtistaComponent } from './artista/artista.component';

export const routing = RouterModule.forRoot([
    { path: '', component: RaizComponent },
    { path: 'spotify', component: SpotifyComponent },
    { path: 'spotify/artista/:id/:name', component: ArtistaComponent },
    { path: '**', component: NoEncontradoComponent }
]);