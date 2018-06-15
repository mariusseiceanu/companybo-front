import { Component, OnInit } from '@angular/core';
import {Company} from '../company.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  index: number;

  constructor(private route: ActivatedRoute,
              private compServ: CompanyService,
              private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['index'];
          this.company = this.compServ.getCompany(this.index);
        }
      );
  }

  onDelete() {
    this.compServ.deleteCompany(this.index);
    this.router.navigate(['..'], { relativeTo: this.route});
  }
}
