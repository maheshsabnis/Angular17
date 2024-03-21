import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { EmployeeComponent } from './employee/employee.component';
import { ChangeDemoComponent } from './change-demo/change-demo.component';
import { EvenOddComponent } from './even-odd/even-odd.component';

export const routes: Routes = [
  {path:'',component:CategoryComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'change',component:ChangeDemoComponent},
  {path:'evenodd', component:EvenOddComponent}
];
