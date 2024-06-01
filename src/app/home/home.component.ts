import { Component } from '@angular/core';
export interface Tile {
  color:string;
  cols:number;
  rows:number;
  text:string;


}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  tiles:Tile[] = [
    {
      color: 'red',
      cols: 1,
      rows: 1,
      text: 'bir'
    },

    {
      color: 'blue',
      cols: 1,
      rows: 1,
      text: 'ikki'
    },
    {
      color: 'tomato',
      cols: 1,
      rows: 1,
      text: 'uch'
    },
    {
      color: 'black',
      cols: 1,
      rows: 1,
      text: 'tort'
    },
    {
      color: 'red',
      cols: 1,
      rows: 1,
      text: 'besh'
    },
    {
      color: 'pink',
      cols: 1,
      rows: 1,
      text: 'olti'
    },
    {
      color: 'yellow',
      cols: 2,
      rows: 1,
      text: 'yetti'
    },


  ]





}
