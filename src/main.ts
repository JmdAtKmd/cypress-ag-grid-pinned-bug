import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { GridComponent } from './grid/grid.component';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-grid></app-grid>`,
  imports: [GridComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
