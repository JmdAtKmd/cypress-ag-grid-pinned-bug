import { Component, OnInit } from '@angular/core';
import 'zone.js';
import { ColDef } from 'ag-grid-community';

import { IRow } from './row.model';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  imports: [AgGridModule],
  standalone: true,
})
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  rowData: IRow[] = [
    {
      mission: 'Voyager',
      company: 'NASA',
      location: 'Cape Canaveral',
      date: '1977-09-05',
      rocket: 'Titan-Centaur ',
      price: 86580000,
      successful: true,
    },
    {
      mission: 'Apollo 13',
      company: 'NASA',
      location: 'Kennedy Space Center',
      date: '1970-04-11',
      rocket: 'Saturn V',
      price: 3750000,
      successful: false,
    },
    {
      mission: 'Falcon 9',
      company: 'SpaceX',
      location: 'Cape Canaveral',
      date: '2015-12-22',
      rocket: 'Falcon 9',
      price: 9750000,
      successful: true,
    },
  ];

  colDefs: ColDef<IRow>[] = [
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful', pinned: 'left' },
    { field: 'rocket', pinned: 'left', },
  ];
}
