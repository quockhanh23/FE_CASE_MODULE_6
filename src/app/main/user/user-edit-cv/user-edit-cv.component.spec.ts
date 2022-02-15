import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditCvComponent } from './user-edit-cv.component';

describe('UserEditCvComponent', () => {
  let component: UserEditCvComponent;
  let fixture: ComponentFixture<UserEditCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
