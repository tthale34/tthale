import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Manager } from './manager.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Employee } from './employee.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  url: string = environment.apiBaseUrl + '/Managers'
  listManager: Manager[] = [];
  listEmployees: Employee[] = [];
  formData: Manager = new Manager();
  formSubmitted: boolean=false;

  constructor(private http: HttpClient) { }
  //Read manager records
  getManagerList(){
    this.http.get(this.url)
    .subscribe({
      next: result => {
        this.listManager = result as Manager[];
      },
      error: err => { console.log(err) }
    });
  }
  
  //Read employees by manager id
  getEmployeesByManagerId(managerId: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiBaseUrl}/Employees/Manager/${managerId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
  // Create manager
  postManager(){
    return this.http.post(this.url,this.formData)
  }
  // Refresh managers
  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new Manager()
    this.formSubmitted=false
  }
  // Update manager
  putManager(){ 
    return this.http.put(this.url + '/' + this.formData.managerId,this.formData)
  }  
  //Delete manager
  deleteManager(id: number){
    return this.http.delete(this.url + '/' + id)
  }
}
