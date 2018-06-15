import { Injectable } from '@angular/core';
import {Company} from './company.model';
import {HttpClient} from '@angular/common/http';
import {ListResult} from '../shared/hateoas/list-result.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companies: Company[] = [
    new Company(1, 'First Company', 'Aleea ...', 'Sibiu', 'Romania', 'sample@email.com', '+2384798'),
    new Company(2, 'Second Company', 'Ala bala portocala', 'Brasov', 'Romania', 'notknown@notsure.ro', '+1234422')
  ];

  constructor(private http: HttpClient) { }

  getCompanies(): Company[] {
    // todo: resolve this using rest
    return this.companies.slice();
  }

  getCompany(id: number) {
    // todo: resolve this using rest
    return this.companies[id - 1];
  }

  handleError() {
  }
}
