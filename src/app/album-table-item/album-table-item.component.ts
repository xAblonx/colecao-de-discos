import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tbody',
  templateUrl: './album-table-item.component.html',
  styleUrls: ['./album-table-item.component.css']
})
export class AlbumTableItemComponent implements OnInit {

  @Input() albumList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
