import { Component, OnInit, Input } from '@angular/core';

import { IssueModel } from '../issue-model';
import { DataService } from "../data.service";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input()
  issue: IssueModel;
  ident;
  identHash;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ident = this.issue.id;
    this.identHash = '#' + this.ident;
  }
  cambiarStatus(id) {
    this.ds.closeIssue(id);
    console.log(`Incidencia ${id} cerrada`);
  }
  borrar(id) {
    this.ds.deleteIssue(id);
    console.log(`Incidencia ${id} borrada`);
  }
}
