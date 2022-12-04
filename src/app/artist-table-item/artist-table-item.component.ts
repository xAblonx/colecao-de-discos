import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { AlbumService } from '../services/album.service';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-table-item',
  templateUrl: './artist-table-item.component.html',
  styleUrls: ['./artist-table-item.component.css']
})
export class ArtistTableItemComponent implements OnInit {

  @Input()
  artistList!: Artist[];

  constructor(
    private artistService: ArtistService,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
  }

  remove(artist: Artist) {
    this.albumService.getByArtistId(artist).subscribe({
      next: (albums: Album[]) => {
        if(albums.length > 0)
          return alert(`Não é possível remover o artista '${artist.name}', pois existem álbuns vinculados a ele.`);

        let answer = confirm(`Deseja remover o artista '${artist.name}'?`);

        if(answer) {
          this.artistService.delete(artist).subscribe({
            next: () => this.artistService.getAll().subscribe({
              next: (artists: Artist[]) => this.artistList = artists,
              error: (error) => alert(error.message)
            }),
            error: (error) => alert(error.message)
          });
        }
      },
      error: (error) => alert(error.message)
    });
  }
}
