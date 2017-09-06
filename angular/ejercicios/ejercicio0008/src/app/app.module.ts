import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';

import { FormsModule } from '@angular/forms';
import { IssueComponent } from './issue/issue.component';
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    IssueFormComponent,
    IssueListComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
