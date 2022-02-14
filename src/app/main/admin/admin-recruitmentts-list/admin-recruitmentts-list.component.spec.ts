import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecruitmenttsListComponent } from './admin-recruitmentts-list.component';

describe('AdminRecruitmenttsListComponent', () => {
  let component: AdminRecruitmenttsListComponent;
  let fixture: ComponentFixture<AdminRecruitmenttsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecruitmenttsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecruitmenttsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
