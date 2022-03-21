import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckDetailEnterpriseComponent } from './user-check-detail-enterprise.component';

describe('UserCheckDetailEnterpriseComponent', () => {
  let component: UserCheckDetailEnterpriseComponent;
  let fixture: ComponentFixture<UserCheckDetailEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCheckDetailEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheckDetailEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
