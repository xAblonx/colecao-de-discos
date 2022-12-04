import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  URL = 'http://localhost:3000/albums';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  save(album: Album): Observable<Album> {
    return this.httpClient
      .post<Album>(this.URL, JSON.stringify(album), this.httpOptions);
  }

  update(album: Album): Observable<Album> {
    return this.httpClient
      .put<Album>(`${this.URL}/${album.id}`, JSON.stringify(album), this.httpOptions);
  }

  getById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.URL}/${id}`);
  }

  getAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.URL}?_expand=artist`);
  }

  getByArtistId(artist: Artist): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.URL}?artistid=${artist.id}`);
  }

  delete(album: Album): Observable<Album> {
    return this.httpClient.delete(`${this.URL}/${album.id}`);
  }
}
