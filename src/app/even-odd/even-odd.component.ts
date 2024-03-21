import { Component } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  standalone: true,
  imports: [],
  templateUrl: './even-odd.component.html',
  styleUrl: './even-odd.component.css'
})
export class EvenOddComponent {
   value:number|any = 0;
   res:boolean = false; 
   setValue(evt:Event):void {
      this.value=(evt.target as HTMLInputElement).value;
      alert(this.value);
       if(this.value % 2 === 0) {
        this.res = true;
        alert(true);
       }else {
        this.res = false;
        alert(false);
       }
   }
}
