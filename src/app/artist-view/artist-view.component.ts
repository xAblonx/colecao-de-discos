import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../models/artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {

  constructor(
    private router: Router,
    private artistService: ArtistService,
    private route: ActivatedRoute
  ) { }

  artist!: Artist;
  artistId?: string | null;

  ngOnInit(): void {
    this.artist = new Artist(null, null, null);
    this.artistId = this.route.snapshot.paramMap.get('id');

    if(this.artistId) {
      this.artistService.getById(parseInt(this.artistId)).subscribe({
        next: (artist: Artist) => {
          this.artist = artist;
        },
        error: (error) => alert(error.message)
      })
    }
  }

  saveOrUpdate() {
    if(this.artistId) {
      this.artistService.update(this.artist).subscribe({
        next: () => this.router.navigate(['/artist-list']),
        error: (error) => alert(error.message)
      });
    } else {
      this.artistService.save(this.artist).subscribe({
        next: () => this.router.navigate(['/artist-list']),
        error: (error) => alert(error.message)
      });
    }
  }
}
