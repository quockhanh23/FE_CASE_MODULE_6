import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCheckLoginComponent } from './dialog-check-login.component';

describe('DialogCheckLoginComponent', () => {
  let component: DialogCheckLoginComponent;
  let fixture: ComponentFixture<DialogCheckLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCheckLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCheckLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
