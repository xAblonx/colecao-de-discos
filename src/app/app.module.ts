import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResourcesComponent } from './resources/resources.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { ArtistViewComponent } from './artist-view/artist-view.component';
import { ArtistTableComponent } from './artist-table/artist-table.component';
import { AlbumTableComponent } from './album-table/album-table.component';
import { AlbumTableItemComponent } from './album-table-item/album-table-item.component';
import { ArtistTableItemComponent } from './artist-table-item/artist-table-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResourcesComponent,
    AlbumListComponent,
    ArtistListComponent,
    AlbumViewComponent,
    ArtistViewComponent,
    ArtistTableComponent,
    AlbumTableComponent,
    AlbumTableItemComponent,
    ArtistTableItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
