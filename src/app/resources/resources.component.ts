import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonStyle() {
    return {
      'width': '400px',
      'height': '100px',
      'backgroundColor': '#223A5E',
      'borderRadius': '5px',
      'color': '#FFF',
      'fontSize': '25px',
      'textTransform': 'uppercase',
      'border': 'none',
      'cursor': 'pointer',
      'margin': '5px'
    }
  }
}
