import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClickDetailComponent } from './dialog-click-detail.component';

describe('DialogClickDetailComponent', () => {
  let component: DialogClickDetailComponent;
  let fixture: ComponentFixture<DialogClickDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClickDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClickDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
