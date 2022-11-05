import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  artistId?: String | null;

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id');
  }

}
