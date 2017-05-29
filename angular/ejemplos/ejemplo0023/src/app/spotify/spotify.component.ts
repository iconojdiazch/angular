import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {  
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