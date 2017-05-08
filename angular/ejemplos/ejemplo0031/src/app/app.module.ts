import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { InitService } from './init.service';
import { WikiService } from './wiki.service';
import { WikiOptimizadoComponent } from './wiki-optimizado/wiki-optimizado.component';

@NgModule({
  declarations: [
    AppComponent,
    WikiOptimizadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [InitService, WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
