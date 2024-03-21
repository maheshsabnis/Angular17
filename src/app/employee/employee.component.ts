import { Component, OnInit } from '@angular/core';
import { Employee, Employees } from '../employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
   employee:Employee;
   employees:Array<Employee>;
   columns:Array<string> = [];
   constructor(){
    this.employee = new Employee(0,'','','',0);
     this.employees = Employees;
    
   }
  ngOnInit(): void {
    this.columns = Object.keys(this.employees[0]);
  }
}
