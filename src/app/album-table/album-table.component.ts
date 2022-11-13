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

  async ngOnInit(): Promise<void> {
    this.albumList = await this.albumService.getAll();
  }
}
