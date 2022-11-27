import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { AlbumService } from '../services/album.service';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private artistService: ArtistService
    ) { }

  album!: Album;
  albumId?: string | null;
  artistList!: Artist[];

  genres: string[] = [
    'Heavy Metal', 'Power Metal', 'Thrash Metal', 'Progressive Metal', 'Doom Metal',
    'Black Metal', 'Death Metal', 'Sludge Metal', 'Stoner Metal', 'Post-Metal',
    'Symphonic Metal', 'Folk Metal', 'Groove Metal', 'Speed Metal', 'Alternative Metal',
    'Nü Metal', 'Gothic Metal', 'Metalcore'
  ];

  ngOnInit(): void {
    this.album = new Album(null, null, null);
    this.albumId = this.route.snapshot.paramMap.get('id');

    this.artistService.getAll().subscribe({
      next: (artists: Artist[]) => {
        this.artistList = artists;
      },
      error: (error) => alert(error.message)
    })

    if(this.albumId) {
      this.albumService.getById(parseInt(this.albumId)).subscribe({
        next: (album: Album) => {
          this.album = album;
        },
        error: (error) => alert(error.message)
      })
    }
  }

  saveOrUpdate() {
    if(this.albumId) {
      this.albumService.update(this.album).subscribe({
        next: () => this.router.navigate(['/album-list']),
        error: (error) => alert(error.message)
      });
    } else {
      this.albumService.save(this.album).subscribe({
        next: () => this.router.navigate(['/album-list']),
        error: (error) => alert(error.message)
      });
    }
  }
}
