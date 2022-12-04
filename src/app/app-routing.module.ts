import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent
  },
  {
    path: 'album-list',
    component: AlbumListComponent
  },
  {
    path: 'album/:id',
    component: AlbumViewComponent
  },
  {
    path: 'new-album',
    component: AlbumViewComponent
  },
  {
    path: 'artist-list',
    component: ArtistListComponent
  },
  {
    path: 'artist/:id',
    component: ArtistViewComponent
  },
  {
    path: 'new-artist',
    component: ArtistViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
