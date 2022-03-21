import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnterpriseDetailComponent } from './admin-enterprise-detail.component';

describe('AdminEnterpriseDetailComponent', () => {
  let component: AdminEnterpriseDetailComponent;
  let fixture: ComponentFixture<AdminEnterpriseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnterpriseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnterpriseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
