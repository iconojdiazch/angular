import { Component, OnInit } from '@angular/core';

import { IssueModel } from '../issue-model';
import { DataService } from "../data.service";

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues;
  subscription;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getIssues().subscribe(resp => this.issues = resp);
    this.subscription = this.ds.issueSourceObservable.subscribe(
      id => this.ds.getIssues().subscribe(resp => this.issues = resp)
    );
  }
}
