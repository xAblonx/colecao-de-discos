import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.css']
})
export class AlbumTableComponent implements OnInit {

  constructor() { }

  albumList = [
    {
      id: 1,
      titulo: "Blackwater Park",
      artista: "Opeth",
      dataLancamento: "12/03/2001"
    },
    {
      id: 2,
      titulo: "Winter's Gate",
      artista: "Insomnium",
      dataLancamento: "26/09/2016"
    },
    {
      id: 3,
      titulo: "Brave New World",
      artista: "Iron Maiden",
      dataLancamento: "29/05/2000"
    }
  ]

  ngOnInit(): void {
  }

}
