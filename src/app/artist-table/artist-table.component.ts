import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.css']
})
export class ArtistTableComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  artistList!: Artist[];

  ngOnInit(): void {
    this.artistService.getAll().subscribe({
      next: (artists: Artist[]) => this.artistList = artists,
      error: (error) => alert(error.message)
    });
  }
}
