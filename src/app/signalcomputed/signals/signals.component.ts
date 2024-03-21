import { Component, computed, signal } from '@angular/core';
import { PurchasedVehicle, Vehicle, Vehicles } from '../vehicles';
import { FormsModule } from '@angular/forms';
import { TableGridComponent } from '../../table-grid/table-grid.component';
 

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
    quantity = signal(1);
    availableQuantity = signal([1,2,3,4,5,6,8,9,10]);
    chosenQuantity  = signal(1);
    vehicles = signal<Vehicle[]>(Vehicles);
    selectedId = signal<number>(0);
    selectedVehicle = signal<Vehicle>(new Vehicle(0,'',0));
    purchasedVehicles = signal<PurchasedVehicle[]>([]);
    purchasedVehicle = signal<PurchasedVehicle>(new PurchasedVehicle(0,'',0,0));
    // Calcluate the Ex-Showroom Price
    exShowRoomPrice = computed(()=>this.selectedVehicle().price * this.quantity());


    constructor(){
      // update the quantity
      this.quantity.update((qty)=>qty * 1);
      this.selectedVehicle.update((veh)=>veh);

      this.purchasedVehicle.update((pv)=>pv);
      this.purchasedVehicles.update((pvs)=> [...pvs, this.purchasedVehicle()]);
    }

    onSelectedQuantity(qty:number):void {
      this.quantity.set(qty);
    }

    onSelectedVehicle(vehId:number):void {
     
      let veh = this.vehicles().filter((v,idx)=> 
      {
        return v.id == vehId
      })[0];
       this.selectedVehicle.set(veh);
       
       let purchase = new PurchasedVehicle(
        veh.id,veh.name, veh.price, this.exShowRoomPrice()
       );
        alert(this.exShowRoomPrice());
       this.purchasedVehicle.set(purchase);
    }

    savePurchase(){
      this.purchasedVehicles.set([...this.purchasedVehicles(), this.purchasedVehicle()])
    }
}
