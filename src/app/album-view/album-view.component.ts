import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../album';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  constructor(private router: Router) { }

  model = new Album(undefined, undefined, undefined);

  ngOnInit(): void {
    M.FormSelect.init(document.querySelectorAll('select'), undefined);
  }

  save() {
    let jsonAlbumList = localStorage.getItem('album');
    let albumList = [];

    if (jsonAlbumList) albumList = JSON.parse(jsonAlbumList);

    albumList.push(this.model);
    localStorage.setItem('album', JSON.stringify(albumList));
    this.model = new Album(undefined, undefined, undefined);
    this.router.navigate(['/album-list']);
  }
}
