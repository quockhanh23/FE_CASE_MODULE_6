import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetialCvComponent } from './dialog-detial-cv.component';

describe('DialogDetialCvComponent', () => {
  let component: DialogDetialCvComponent;
  let fixture: ComponentFixture<DialogDetialCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetialCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetialCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
