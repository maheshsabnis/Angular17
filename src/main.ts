import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmployeeComponent } from './app/employee/employee.component';
import { EvenOddComponent } from './app/even-odd/even-odd.component';
import { CategoryComponent } from './app/category/category.component';
import { ChangeDemoComponent } from './app/change-demo/change-demo.component';
import { SignalsComponent } from './app/signalcomputed/signals/signals.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
