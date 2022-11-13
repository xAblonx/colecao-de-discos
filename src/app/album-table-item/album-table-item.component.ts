import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'tbody',
  templateUrl: './album-table-item.component.html',
  styleUrls: ['./album-table-item.component.css']
})
export class AlbumTableItemComponent implements OnInit {

  @Input()
  albumList!: Album[];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  async remove(album: Album) {
    await this.albumService.delete(album)
      .then(async () => this.albumList = await  this.albumService.getAll())
      .catch(() => alert("Erro na exclusão"));
  }
}
