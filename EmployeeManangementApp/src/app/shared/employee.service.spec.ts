import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { NgForm, FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('EmployeeService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let employeeService: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [EmployeeService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    employeeService = TestBed.inject(EmployeeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });

  it('should fetch employees from API via GET', () => {
    const mockEmployees: Employee[] = [
      {
        employeeId: 1, employeeName: 'John Doe',
        employeeSurname: '',
        employeePosition: '',
        employeeManagerId: 0
      },
      {
        employeeId: 2, employeeName: 'Jane Smith',
        employeeSurname: '',
        employeePosition: '',
        employeeManagerId: 0
      }
    ];

    employeeService.getEmployeeList();
    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockEmployees);

    expect(employeeService.list.length).toBe(2);
    expect(employeeService.list[0].employeeName).toEqual('John Doe');
    expect(employeeService.list[1].employeeName).toEqual('Jane Smith');
  });

  it('should handle error when fetching employees', () => {
    const errorMessage = 'Server error';
    spyOn(console, 'error');

    employeeService.getEmployeeList();
    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees`);
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });

    expect(console.error).toHaveBeenCalled();
  });

  it('should post employee data via POST', () => {
    const mockEmployee: Employee = {
      employeeId: 1, employeeName: 'John Doe',
      employeeSurname: '',
      employeePosition: '',
      employeeManagerId: 0
    };

    employeeService.postEmployee().subscribe((result) => {
      expect(result).toEqual(mockEmployee);
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockEmployee);
  });

  it('should reset form and set formSubmitted to false', () => {
    const mockForm: NgForm = {
      form: {
        reset: jasmine.createSpy('reset')
      } as any
    } as NgForm;

    employeeService.resetForm(mockForm);

    expect(mockForm.form.reset).toHaveBeenCalled();
    expect(employeeService.formData).toEqual(new Employee());
    expect(employeeService.formSubmitted).toBeFalse();
  });

  it('should update employee data via PUT', () => {
    const mockEmployee: Employee = {
      employeeId: 1, employeeName: 'John Doe',
      employeeSurname: '',
      employeePosition: '',
      employeeManagerId: 0
    };

    employeeService.formData = mockEmployee;
    employeeService.putEmployee().subscribe((result) => {
      expect(result).toEqual(mockEmployee);
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees/${mockEmployee.employeeId}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(mockEmployee);
  });

  it('should delete employee via DELETE', () => {
    const employeeId = 1;

    employeeService.deleteEmployee(employeeId).subscribe((result) => {
      expect(result).toBeNull(); // or handle the response accordingly
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees/${employeeId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
  });
});
