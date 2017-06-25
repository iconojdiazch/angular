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
  repos: GitInfo[];
  cargando: boolean = true;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe(
      data => {
        this.cargando = false;
        this.repos = data;
        console.log(this.repos);
      }
    );
  }
}