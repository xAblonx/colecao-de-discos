import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.css']
})
export class AlbumTableComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  albumList!: Album[];

  ngOnInit(): void {
    this.albumService.getAll().subscribe({
      next: (albums: Album[]) => this.albumList = albums,
      error: (error) => alert(error.message)
    });
  }
}
