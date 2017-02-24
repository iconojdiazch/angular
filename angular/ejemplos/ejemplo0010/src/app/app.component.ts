import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})

export class AppComponent implements OnInit {  
  title: string = 'app works!';
  cargando: boolean = true;
  artistas = [];
  constructor(private spotifyService: SpotifyService) { }
  ngOnInit(): void {
    this.spotifyService.getArtistas().subscribe(
      data => {
        this.cargando = false;
        this.artistas = data.artists.items;
        console.log(this.artistas);
      }
    );
  }
}
