import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

type GitInfo = {
  id: number,
  name: string,
  full_name: string,
  html_url: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private githubService: GithubService) { }
  ngOnInit() {
    this.githubService.getRepos().subscribe(
      repos => repos.forEach(
        (r: GitInfo) => console.log(
          `Id: ${r.id}. Nombre: ${r.name}. Completo: ${r.full_name}. Url: ${r.html_url}.`
        )
      )
    );
  }
}