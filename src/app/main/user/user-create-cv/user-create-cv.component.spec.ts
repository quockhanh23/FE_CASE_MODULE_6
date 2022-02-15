import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateCvComponent } from './user-create-cv.component';

describe('UserCreateCvComponent', () => {
  let component: UserCreateCvComponent;
  let fixture: ComponentFixture<UserCreateCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
