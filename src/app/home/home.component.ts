import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Welcome to MyCar!', cols: 3, rows: 1, color: '#CD5C5C'},
    {text: 'April 2021', cols: 1, rows: 1, color: '#F08080'},
    {text: '(C) Oryan, Eyal & Tal', cols: 2, rows: 1, color: '#E9967A'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
