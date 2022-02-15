import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApplyNowComponent } from './dialog-apply-now.component';

describe('DialogApplyNowComponent', () => {
  let component: DialogApplyNowComponent;
  let fixture: ComponentFixture<DialogApplyNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogApplyNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogApplyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
