import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCheckCvComponent } from './dialog-check-cv.component';

describe('DialogCheckCvComponent', () => {
  let component: DialogCheckCvComponent;
  let fixture: ComponentFixture<DialogCheckCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCheckCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCheckCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
