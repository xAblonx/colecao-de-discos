import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

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
