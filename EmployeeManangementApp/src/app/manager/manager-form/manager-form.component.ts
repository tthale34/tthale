import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { Manager } from 'src/app/shared/manager.model';
import { ManagerService } from 'src/app/shared/manager.service';

@Component({
  selector: 'app-manager-form',
  templateUrl: './manager-form.component.html',
  styleUrls: ['./manager-form.component.css']
})
export class ManagerFormComponent {
  constructor(public service : ManagerService, private toastr:ToastrService) {
    
  }

  onSubmit(form: NgForm){
    if (form.valid) {
      if (this.service.formData.managerId == 0) {
        this.insertManager(form)
      } else {
        this.updateManager(form)      
      }
    }else{
      this.toastr.error('Invalid submission')
    }
  }

  insertManager(form: NgForm){
    this.service.postManager()
      .subscribe({
        next: res => {
          this.service.listManager = res as Manager[]
          this.service.resetForm(form)
          this.toastr.success('Manager added successfully', 'Manager Management')
        },
        error: err => { console.log(err) }
      })
  }
  updateManager(form: NgForm){
    this.service.putManager()
      .subscribe({
        next: res => {
          this.service.listManager = res as Manager[]
          this.service.resetForm(form)
          this.toastr.info('Manager updated successfully', 'Manager Management')
        },
        error: err => { console.log(err) }
      })
  }

}
