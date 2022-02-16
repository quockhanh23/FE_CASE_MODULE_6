import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListCvComponent } from './user-list-cv.component';

describe('UserListCvComponent', () => {
  let component: UserListCvComponent;
  let fixture: ComponentFixture<UserListCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
