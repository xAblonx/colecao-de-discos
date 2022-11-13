import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  constructor(
    private router: Router,
    private albumService: AlbumService,
    ) { }

  album!: Album;

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'), undefined);
    this.album = new Album(undefined, undefined, undefined);
  }

  save() {
    this.albumService.save(this.album);
    this.router.navigate(['/album-list']);
  }
}
