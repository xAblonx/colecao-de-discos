import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.css']
})
export class ArtistTableComponent implements OnInit {

  constructor() { }

  artistList = [
    {
      id: 1,
      nome: "Opeth",
      origem: "Suécia"
    },
    {
      id: 2,
      nome: "Insomnium",
      origem: "Finlândia"
    },
    {
      id: 3,
      nome: "Iron Maiden",
      origem: "Reino Unido"
    }
  ]

  ngOnInit(): void {
  }

}
