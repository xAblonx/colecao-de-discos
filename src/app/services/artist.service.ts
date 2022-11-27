import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from '../models/artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  URL = 'http://localhost:3000/artists';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  save(artist: Artist): Observable<Artist> {
    return this.httpClient
      .post<Artist>(this.URL, JSON.stringify(artist), this.httpOptions);
  }

  update(artist: Artist): Observable<Artist> {
    return this.httpClient
      .put<Artist>(`${this.URL}/${artist.id}`, JSON.stringify(artist), this.httpOptions);
  }

  getById(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(`${this.URL}/${id}`);
  }

  getAll(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.URL);
  }

  delete(artist: Artist): Observable<Artist> {
    return this.httpClient.delete(`${this.URL}/${artist.id}`);
  }
}
