import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, signal, WritableSignal, ɵunwrapWritableSignal } from '@angular/core';
import { ChangeDemoChildComponent } from '../change-demo-child/change-demo-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-demo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChangeDemoChildComponent,FormsModule],
  templateUrl: './change-demo.component.html',
  styleUrl: './change-demo.component.css'
})
export class ChangeDemoComponent implements OnChanges {

 

  counter1 = signal(0);

  name = signal<string>('Mahesh Sabnis');

  nameInput = signal<string>('Tejas Sabnis');

  
   
  constructor() {
   console.log('ChangeDemoComponent constructor');
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Parent Changed');
    const change = changes["counter"];
    if (change) {
      console.log(
      `New value: ${change.currentValue}`);
    }
  }
  counter: number = 0;

  increment() {
      this.counter++;
      console.log(`Updating counter...`)
      this.counter1.set(this.counter1() + 1);
  }
  updateSignalInParent(){
    this.name.set("Mahesh Rameshrao Sabnis, Pune");
  }
}
