import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailCvComponent } from './dialog-detail-cv.component';

describe('DialogDetialCvComponent', () => {
  let component: DialogDetailCvComponent;
  let fixture: ComponentFixture<DialogDetailCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
