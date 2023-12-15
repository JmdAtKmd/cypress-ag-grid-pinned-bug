import 'zone.js';

import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

import { Component, OnInit } from '@angular/core';

import { rowData } from './row-data';
import { IRow } from './row.model';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    imports: [AgGridModule],
    standalone: true,
})
export class GridComponent implements OnInit {
    colDefs: ColDef<IRow>[] = [
        { field: 'mission' },
        { field: 'company' },
        { field: 'location' },
        { field: 'date' },
        { field: 'price' },
        { field: 'successful', pinned: 'left' },
        { field: 'rocket', pinned: 'left', },
    ];

    constructor() { }

    ngOnInit() { }

    rowData: IRow[] = rowData;
}
