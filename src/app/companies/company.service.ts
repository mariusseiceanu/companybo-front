import { Injectable } from '@angular/core';
import {Company} from './company.model';
import {HttpClient} from '@angular/common/http';
import {ListResult} from '../shared/hateoas/list-result.interface';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companiesUpdated = new Subject<Company[]>();

  companies: Company[] = [
    new Company('First Company', 'Aleea ...', 'Sibiu', 'Romania', 'sample@email.com', '+2384798'),
    new Company('Second Company', 'Ala bala portocala', 'Brasov', 'Romania', 'notknown@notsure.ro', '+1234422')
  ];

  constructor(private http: HttpClient) { }

  getCompanies(): Company[] {
    return this.companies.slice();
  }

  getCompany(index: number) {
    return this.companies[index];
  }

  updateCompany(index: number, newCompany: Company) {
    this.companies[index] = newCompany;
    this.companiesUpdated.next(this.getCompanies());
  }

  addCompany(newCompany: Company) {
    this.companies.push(newCompany);
    this.companiesUpdated.next(this.getCompanies());
  }

  deleteCompany(index: number) {
    this.companies.splice(index, 1);
    this.companiesUpdated.next(this.getCompanies());
  }
}
