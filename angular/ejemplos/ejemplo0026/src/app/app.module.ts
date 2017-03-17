import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { UsuarioComponent } from './usuario/usuario.component';

import { routing } from './app.routing';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { ReactiveFormsModule } from '@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyA4bR62GKBUpOOXPznRWUSvvgl51HOVuZ8",
  authDomain: "ejemplo0025.firebaseapp.com",
  databaseURL: "https://ejemplo0025.firebaseio.com",
  storageBucket: "ejemplo0025.appspot.com",
  messagingSenderId: "767908644697"
};

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
