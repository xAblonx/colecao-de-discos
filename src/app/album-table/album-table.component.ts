import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.css']
})
export class AlbumTableComponent implements OnInit {

  constructor() { }
  albumList: any

  ngOnInit(): void {
    let jsonAlbumList = localStorage.getItem('album');

    if (jsonAlbumList) this.albumList = JSON.parse(jsonAlbumList);
  }
}
