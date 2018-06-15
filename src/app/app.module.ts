import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import {AppRoutingModule} from './app-routing.module';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';
import { CompanyNotSelectedComponent } from './companies/company-not-selected/company-not-selected.component';
import { CompanyListItemComponent } from './companies/company-list/company-list-item/company-list-item.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    CompaniesComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
    CompanyNotSelectedComponent,
    CompanyListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
