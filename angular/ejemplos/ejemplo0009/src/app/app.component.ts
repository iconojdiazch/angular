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
  constructor(private spotifyService: SpotifyService) { }
  ngOnInit(): void {
    this.spotifyService.getArtistas().subscribe(data => console.log(data.artists.items));
  }
}
