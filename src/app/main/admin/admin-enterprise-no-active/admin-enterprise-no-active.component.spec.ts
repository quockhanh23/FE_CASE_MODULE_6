import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnterpriseNoActiveComponent } from './admin-enterprise-no-active.component';

describe('AdminEnterpriseNoActiveComponent', () => {
  let component: AdminEnterpriseNoActiveComponent;
  let fixture: ComponentFixture<AdminEnterpriseNoActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnterpriseNoActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnterpriseNoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
