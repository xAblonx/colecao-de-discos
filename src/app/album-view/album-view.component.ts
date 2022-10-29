import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  albumId?: String | null;

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
  }
}
