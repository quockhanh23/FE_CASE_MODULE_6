import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendCvComponent } from './dialog-send-cv.component';

describe('DialogSendCvComponent', () => {
  let component: DialogSendCvComponent;
  let fixture: ComponentFixture<DialogSendCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSendCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSendCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
