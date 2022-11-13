import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../models/album';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  URL = 'http://localhost:3000/albums';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  save(album: Album): Promise<Album> {
    return firstValueFrom(this.httpClient
      .post<Album>(this.URL, JSON.stringify(album), this.httpOptions));
  }

  getAll(): Promise<Album[]> {
    return firstValueFrom(this.httpClient.get<Album[]>(this.URL));
  }

  delete(album: Album): Promise<Album> {
    return firstValueFrom(this.httpClient.delete(`${this.URL}/${album.id}`));
  }
}
