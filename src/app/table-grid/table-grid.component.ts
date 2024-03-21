import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-grid',
  standalone: true,
  imports: [],
  templateUrl: './table-grid.component.html',
  styleUrl: './table-grid.component.css'
})
export class TableGridComponent implements OnInit {
   
    private _DataSource:Array<any>;
    columns:Array<string>;
    @Output()
    onRowClick:EventEmitter<any>;
    constructor(){
      this._DataSource = new Array<any>();
      this.columns = new Array<string>();
     
      this.onRowClick = new EventEmitter<any>();
    }
  ngOnInit(): void {
    this.columns = Object.keys(this._DataSource[0]);
  }
    @Input()
    set DataSource(value:Array<any>){
      this._DataSource = value;
    }

    get DataSource():Array<any>{
      return this._DataSource;
    }

    rowClicked(row:any){
      this.onRowClick.emit(row);
    }
}
