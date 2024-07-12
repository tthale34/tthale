import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  constructor(public service : EmployeeService, private toastr:ToastrService) {}

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log(form)
      if (this.service.formData.employeeId == 0)
        this.insertEmployee(form)
      else
        this.updateEmployee(form)
    }else{
      this.toastr.error('Invalid submission')
    }
  }

  insertEmployee(form: NgForm){
    console.log("insert")
    console.log(form)
    this.service.postEmployee()
      .subscribe({
        next: res => {
          this.service.list = res as Employee[]
          console.log(res)
          this.service.resetForm(form)
          this.toastr.success('Employee added successfully', 'Employee Management')
        },
        error: err => { console.log(err) }
      })
  }
  updateEmployee(form: NgForm){
    console.log(form)
    this.service.putEmployee()
      .subscribe({
        next: res => {
          this.service.list = res as Employee[]
          console.log(res)
          this.service.resetForm(form)
          this.toastr.info('Employee updated successfully', 'Employee Management')
        },
        error: err => { console.log(err) }
      })
  }

}
