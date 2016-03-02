import { Injectable } from 'angular2/core';
import { Company } from '../models/company';
import { COMPANIES } from '../mocks/mock-companies';

@Injectable()

export class CompanyService {
	getCompanies() { return COMPANIES; }
}