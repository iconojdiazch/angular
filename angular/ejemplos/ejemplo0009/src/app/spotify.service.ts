import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    //private spotifyUrl = 'https://api.spotify.com/v1/search?q=jason&type=artist&limit=20&offset=0';
    constructor(private http: Http) { }
    getArtistas() {
        //return this.http.get(this.spotifyUrl).map(response => response.json());
        return this.http.get('src/app/artistas.json')
            .map(response => response.json());
    }
}