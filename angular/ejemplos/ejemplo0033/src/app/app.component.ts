import { Component } from '@angular/core';
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
export class AppComponent{
  title = 'app works!';
  repos: GitInfo[];
  cargando: boolean = true;

  constructor(private githubService: GithubService) { }

  reposUsuario(nombre: string): void {
    this.githubService.getReposUsuario(nombre).subscribe(
      data => {
        this.cargando = false;
        this.repos = data;
        console.log(this.repos);
      }
    );
  }
}