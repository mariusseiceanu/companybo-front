import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from './companies/companies.component';
import {UsersComponent} from './users/users.component';
import {CompanyEditComponent} from './companies/company-edit/company-edit.component';
import {CompanyDetailComponent} from './companies/company-detail/company-detail.component';
import {CompanyNotSelectedComponent} from './companies/company-not-selected/company-not-selected.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full'},
  { path: 'companies', component: CompaniesComponent, children: [
      { path: 'new', component: CompanyEditComponent },
      { path: ':id', component: CompanyDetailComponent },
      { path: ':id/edit', component: CompanyEditComponent },
      { path: '**', component: CompanyNotSelectedComponent }
    ]},
  { path: 'users', component: UsersComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
