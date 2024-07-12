import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Employee } from './employee.model';
import { NgForm } from '@angular/forms';
import { Manager } from './manager.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = environment.apiBaseUrl + '/Employees'
  list: Employee[] = [];
  listManagers:  Manager[] = [];
  formData: Employee = new Employee();
  formSubmitted: boolean=false;

  constructor(private http: HttpClient) { }
  //Read employees
  getEmployeeList(){    
    this.http.get(this.url)
    .subscribe({
      next: result => {
        this.list = result as Employee[];
      },
      error: err => { console.log(err) }
    });
  }
  //Read managers
  getManagerList(){
    this.http.get(environment.apiBaseUrl + '/Managers')
    .subscribe({
      next: result => {
        this.listManagers = result as Manager[];
      },
      error: err => { console.log(err) }
    });
  }
  // Create employee
  postEmployee(){
    // console.log(this.formData)
    return this.http.post(this.url,this.formData)
  }
  // Refresh employees
  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new Employee()
    this.formSubmitted=false
  }
  // Update employee
  putEmployee(){ 
    return this.http.put(this.url + '/' + this.formData.employeeId,this.formData)
  }  
  //Delete employee
  deleteEmployee(id: number){
    return this.http.delete(this.url + '/' + id)
  }
}
