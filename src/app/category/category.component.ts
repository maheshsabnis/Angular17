import { Component, OnInit } from '@angular/core';
import { CategoryHttpService } from '../categoryr-http.service';
import { Category } from '../category';
import { TableGridComponent } from '../table-grid/table-grid.component';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TableGridComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
   categories:Array<Category>;
   message:string = "";
   constructor(private serv:CategoryHttpService){
    this.categories = new Array<Category>();
   }
  ngOnInit(): void {
    this.serv.getData().subscribe({
      next:(response)=>this.categories = response,
      error:(err)=> this.message = err
    });
  }

}
