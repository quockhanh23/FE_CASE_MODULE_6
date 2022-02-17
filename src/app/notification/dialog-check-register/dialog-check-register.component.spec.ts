import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCheckRegisterComponent } from './dialog-check-register.component';

describe('DialogCheckRegisterComponent', () => {
  let component: DialogCheckRegisterComponent;
  let fixture: ComponentFixture<DialogCheckRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCheckRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCheckRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
