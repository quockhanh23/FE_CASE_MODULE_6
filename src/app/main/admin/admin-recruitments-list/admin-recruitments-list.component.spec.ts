import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecruitmentsListComponent } from './admin-recruitments-list.component';

describe('AdminRecruitmentsListComponent', () => {
  let component: AdminRecruitmentsListComponent;
  let fixture: ComponentFixture<AdminRecruitmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecruitmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecruitmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
