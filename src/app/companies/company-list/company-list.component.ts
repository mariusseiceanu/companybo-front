import {Component, OnDestroy, OnInit} from '@angular/core';
import {Company} from '../company.model';
import {CompanyService} from '../company.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companies: Company[];
  private subscription: Subscription;

  constructor(private compServ: CompanyService) { }

  ngOnInit() {
    this.companies = this.compServ.getCompanies();
    this.subscription = this.compServ.companiesUpdated
      .subscribe(companies => {
        this.companies = companies;
      });
  }


  onSearch() {
    this.compServ.search();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
