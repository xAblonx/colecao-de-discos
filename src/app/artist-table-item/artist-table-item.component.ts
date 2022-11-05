import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-table-item',
  templateUrl: './artist-table-item.component.html',
  styleUrls: ['./artist-table-item.component.css']
})
export class ArtistTableItemComponent implements OnInit {

  @Input() artistList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
