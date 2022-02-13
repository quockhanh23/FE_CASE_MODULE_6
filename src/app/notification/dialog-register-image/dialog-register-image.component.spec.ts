import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterImageComponent } from './dialog-register-image.component';

describe('DialogRegisterImageComponent', () => {
  let component: DialogRegisterImageComponent;
  let fixture: ComponentFixture<DialogRegisterImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegisterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
