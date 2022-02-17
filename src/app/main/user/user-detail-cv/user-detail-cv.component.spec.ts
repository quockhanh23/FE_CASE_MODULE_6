import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailCvComponent } from './user-detail-cv.component';

describe('UserDetailCvComponent', () => {
  let component: UserDetailCvComponent;
  let fixture: ComponentFixture<UserDetailCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
