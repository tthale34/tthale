import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  constructor(public service : EmployeeService,private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.service.getEmployeeList();
    this.service.getManagerList();
  }

  loadEmployeeEdit(selectRecord:Employee){
    console.log(selectRecord)
    this.service.formData = Object.assign({}, selectRecord);
  }
  
  deleteEmployee(employeeId: number,name: string){
    if (confirm('Do you want to delete ' + name + ' from list of employees?')) {
      this.service.deleteEmployee(employeeId)
      .subscribe({
        next: res => {
          this.service.list = res as Employee[]
          this.toastr.info('Employee deleted successfully', 'Employee Management')
        }
      })
    }
  }

}
