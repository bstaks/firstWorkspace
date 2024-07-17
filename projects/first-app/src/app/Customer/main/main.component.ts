import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as types from '../../types/api-types';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public title: string = '';

  ELEMENT_DATA: types.PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    // Add more elements here...
  ];

  public displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'actions',
  ];
  public dataSource = new MatTableDataSource<types.PeriodicElement>();

  public ngOnInit(): void {
    this.title = 'Main Component';
    this.dataSource.data = this.ELEMENT_DATA;
  }

  public onSave(type: types.PeriodicElement) {
    console.log(type);
  }
}
