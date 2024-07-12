import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
  { path: 'employees', component: EmployeeComponent },
  { path: 'managers', component: ManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
