import { Injectable } from 'angular2/core';
import { Employee } from '../models/employee';
import { EMPLOYEES } from '../mocks/mock-employees';

@Injectable()

export class EmployeeService {
	getEmployees() { return EMPLOYEES; }
}