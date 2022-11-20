import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';
import { Observable } from 'rxjs';

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

  getAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.URL);
  }

  delete(album: Album): Observable<Album> {
    return this.httpClient.delete(`${this.URL}/${album.id}`);
  }
}
