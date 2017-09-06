import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { IssueModel } from '../issue-model';
import { DataService } from "../data.service";

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {
  issue = new IssueModel('', '', '', '');
  constructor(private ds: DataService) { }

  ngOnInit() {
  }
  enviar() {
    this.issue.id = UUID.UUID();
    this.ds.saveIssue(this.issue);
    const { id, descripcion, severidad, responsable, status } = this.issue;
    console.log(`Id:${id}. Descripcion: ${descripcion}. Severidad: ${severidad}. Responsable: ${responsable}. Status: ${status}`)
    console.log("Formulario enviado");
  }
}
