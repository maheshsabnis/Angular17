import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { EmployeeComponent } from './app/employee/employee.component';
import { EvenOddComponent } from './app/even-odd/even-odd.component';
import { CategoryComponent } from './app/category/category.component';
import { ChangeDemoComponent } from './app/change-demo/change-demo.component';
import { SignalsComponent } from './app/signalcomputed/signals/signals.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
