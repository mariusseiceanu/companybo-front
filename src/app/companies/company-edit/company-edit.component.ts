import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Company} from '../company.model';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  myForm: FormGroup;
  index: number;
  editMode = false;
  company: Company;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private compServ: CompanyService) { }

  ngOnInit() {
    this.initForm();
    this.route.params
      .subscribe((params: Params) => {
        this.index = +params['index'];
        this.editMode = params['index'] != null;

        this.initForm();
      });
  }


  private initForm() {
    let name = '';
    let address = '';
    let city = '';
    let country = '';
    let email = '';
    let phoneNumber = '';

    if (this.editMode) {
      this.company = this.compServ
        .getCompany(this.index);
      name = this.company.name;
      address = this.company.address;
      city = this.company.city;
      country = this.company.country;
      email = this.company.email;
      phoneNumber = this.company.phoneNumber;

      //todo: add bos
    }

    this.myForm = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'address': new FormControl(address, [Validators.required]),
      'city': new FormControl(city, [Validators.required]),
      'country': new FormControl(country, [Validators.required]),
      'email': new FormControl(email, [Validators.email]),
      'phoneNumber': new FormControl(phoneNumber, [])
      // todo: add bos
    });
  }

  onSubmit() {
    const newCompany = new Company(
      this.myForm.value['name'],
      this.myForm.value['address'],
      this.myForm.value['city'],
      this.myForm.value['country'],
      this.myForm.value['email'],
      this.myForm.value['phoneNumber']
    );

    if (this.editMode) {
      this.compServ.updateCompany(this.index, newCompany);
    } else {
      this.compServ.addCompany(newCompany);
    }

    this.editMode = false;
    this.router.navigate(['..'], { relativeTo: this.route});
  }

  onCancel() {
    this.editMode = false;
    this.router.navigate(['..'], { relativeTo: this.route});
  }

}
