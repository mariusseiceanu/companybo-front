import { Component, OnInit } from '@angular/core';
import {Company} from '../company.model';
import {ActivatedRoute, Params} from '@angular/router';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  id: number;

  constructor(private route: ActivatedRoute,
              private compServ: CompanyService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.company = this.compServ.getCompany(this.id);
        }
      );
  }

}
