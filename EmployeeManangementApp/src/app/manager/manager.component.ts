import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../shared/manager.service';
import { Manager } from '../shared/manager.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit{
  constructor(public service : ManagerService,private toastr:ToastrService){

  }
  listEmployee: Employee[]=[]
  ngOnInit(): void {
    this.service.getManagerList();
  }

  loadManagerEdit(selectRecord:Manager){
    console.log(selectRecord);
    this.service.getEmployeesByManagerId(selectRecord.managerId).subscribe(
      (data: Employee[]) => {
        this.listEmployee = data;
        if (this.listEmployee.length > 0) {
          for (let index = 0; index < this.listEmployee.length; index++) {
            const tableContent = this.listEmployee.map(emp =>
              `<tr><td>${emp.employeeId}</td><td>${emp.employeeName}</td><td>${emp.employeeSurname}</td><td>${emp.employeePosition}</td><td>${emp.employeeManagerId}</td></tr>`
            ).join('');
            document.getElementById("employees")!.innerHTML = tableContent;
          }
        }else{
          const tableContent = this.listEmployee.map(emp =>
            `<tr><td></td><td></td><td></td><td></td><td></td></tr>`
          ).join('');
          document.getElementById("employees")!.innerHTML = tableContent;
        }
        console.log(this.listEmployee);
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
    this.service.formData = Object.assign({}, selectRecord);
  }
  
  deleteManager(managerId: number,name: string){
    if (confirm('Do you want to delete ' + name + ' from list of managers?')) {
      this.service.deleteManager(managerId)
      .subscribe({
        next: res => {
          this.service.listManager = res as Manager[]
          this.toastr.info('Manager deleted successfully', 'Manager Management')
        }
      })
    }
  }

}
