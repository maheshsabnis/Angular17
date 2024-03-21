import { Component, Input, OnChanges, SimpleChanges, WritableSignal, input } from '@angular/core';
 

@Component({
  selector: 'app-change-demo-child',
  standalone: true,
  imports: [],
  templateUrl: './change-demo-child.component.html',
  styleUrl: './change-demo-child.component.css'
})
export class ChangeDemoChildComponent implements OnChanges {


 
  @Input()
  message:string;

  @Input({ required: true }) 
    name !: WritableSignal<string> 
// for Angular 17.1
  nameInput = input.required<string>();

  constructor(){
    this.message = "";
    console.log('ChangeDemoChildComponent constuctor is called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Component Changed');
  }


  updateNameInputReceivedFromParentInChild(){
    this.nameInput = input("dd");
  }

}
