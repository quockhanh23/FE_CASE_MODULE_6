import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckDetailUserComponent } from './admin-check-detail-user.component';

describe('AdminCheckDetailUserComponent', () => {
  let component: AdminCheckDetailUserComponent;
  let fixture: ComponentFixture<AdminCheckDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
