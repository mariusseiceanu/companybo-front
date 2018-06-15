import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNotSelectedComponent } from './company-not-selected.component';

describe('CompanyNotSelectedComponent', () => {
  let component: CompanyNotSelectedComponent;
  let fixture: ComponentFixture<CompanyNotSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNotSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
