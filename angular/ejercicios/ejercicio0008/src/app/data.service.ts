import { Injectable } from '@angular/core';
import { IssueModel } from "./issue-model";

import { Observable } from "rxjs/Rx";

const loadFromLocalStorage = () => localStorage.getItem('issues');
const mapToIssues = () => JSON.parse(loadFromLocalStorage()) as IssueModel[];

import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  private issueSource = new Subject<string>();
  issueSourceObservable = this.issueSource.asObservable();

  constructor() { }
  getIssues() {
    return loadFromLocalStorage() === null ?
      Observable.of([] as IssueModel[])
      : Observable.of(mapToIssues());
  }
  saveIssue(model: IssueModel) {
    let issues: IssueModel[] = [];
    if (loadFromLocalStorage() !== null) {
      issues = mapToIssues();
    }
    issues.push(model);
    localStorage.setItem('issues', JSON.stringify(issues));
    this.issueSource.next(model.id);
  }
  closeIssue(id: string) {
    let issues = mapToIssues();
    let index = issues.findIndex(issue => issue.id === id);
    if (index !== -1) {
      issues[index].status = "Cerrada";
      localStorage.setItem('issues', JSON.stringify(issues));
      this.issueSource.next(id);
    }
  }
  deleteIssue(id: string) {
    localStorage.setItem(
      'issues',
      JSON.stringify(
        mapToIssues().filter(issue => issue.id !== id)
      ));
    this.issueSource.next(id);
  }
}
