import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ManagerService } from './manager.service';
import { Manager } from './manager.model';
import { NgForm, FormsModule } from '@angular/forms';
import { Employee } from './employee.model';
import { of, throwError } from 'rxjs';

describe('ManagerService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let managerService: ManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ManagerService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    managerService = TestBed.inject(ManagerService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(managerService).toBeTruthy();
  });

  describe('getManagerList', () => {
    it('should fetch managers from API via GET', () => {
      const mockManagers: Manager[] = [
        {
          managerId: 1, managerName: 'John Doe',
          managerSurname: '',
          managerDepartment: ''
        },
        {
          managerId: 2, managerName: 'Jane Smith',
          managerSurname: '',
          managerDepartment: ''
        }
      ];

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Managers`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockManagers);
    });

    it('should handle error when fetching managers', () => {
      const errorMessage = 'Server error';
      spyOn(console, 'error');

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Managers`);
      req.flush(errorMessage, { status: 500, statusText: 'Server Error' });

      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('getEmployeesByManagerId', () => {
    it('should fetch employees by manager ID from API via GET', () => {
      const managerId = 1;
      const mockEmployees: Employee[] = [
        {
          employeeId: 1, employeeName: 'John Doe', employeeManagerId: 1,
          employeeSurname: '',
          employeePosition: ''
        },
        {
          employeeId: 2, employeeName: 'Jane Smith', employeeManagerId: 1,
          employeeSurname: '',
          employeePosition: ''
        }
      ];

      managerService.getEmployeesByManagerId(managerId).subscribe((employees) => {
        expect(employees).toEqual(mockEmployees);
      });

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees/Manager/${managerId}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockEmployees);
    });

    it('should handle error when fetching employees by manager ID', () => {
      const managerId = 1;
      const errorMessage = 'Server error';
      spyOn(console, 'error');

      managerService.getEmployeesByManagerId(managerId).subscribe({
        error: (err) => {
          expect(err).toEqual(errorMessage);
        }
      });

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Employees/Manager/${managerId}`);
      req.flush(errorMessage, { status: 500, statusText: 'Server Error' });

      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('postManager', () => {
    it('should create a manager via POST', () => {
      const newManager: Manager = {
        managerId: 1, managerName: 'John Doe',
        managerSurname: '',
        managerDepartment: ''
      };

      managerService.postManager().subscribe((manager) => {
        expect(manager).toEqual(newManager);
      });

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Managers`);
      expect(req.request.method).toEqual('POST');
      req.flush(newManager);
    });
  });

  describe('resetForm', () => {
    it('should reset form and set formSubmitted to false', () => {
      const mockForm: NgForm = {
        form: {
          reset: jasmine.createSpy('reset')
        } as any
      } as NgForm;

      managerService.resetForm(mockForm);

      expect(mockForm.form.reset).toHaveBeenCalled();
      expect(managerService.formData).toEqual(new Manager());
      expect(managerService.formSubmitted).toBeFalse();
    });
  });

  describe('putManager', () => {
    it('should update a manager via PUT', () => {
      const updatedManager: Manager = {
        managerId: 1, managerName: 'Updated John Doe',
        managerSurname: '',
        managerDepartment: ''
      };
      managerService.formData = updatedManager;

      managerService.putManager().subscribe((manager) => {
        expect(manager).toEqual(updatedManager);
      });

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Managers/${updatedManager.managerId}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(updatedManager);
    });
  });

  describe('deleteManager', () => {
    it('should delete a manager via DELETE', () => {
      const managerId = 1;

      managerService.deleteManager(managerId).subscribe((response) => {
        expect(response).toBeNull(); // or handle the response accordingly
      });

      const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/Managers/${managerId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(null);
    });
  });

});
