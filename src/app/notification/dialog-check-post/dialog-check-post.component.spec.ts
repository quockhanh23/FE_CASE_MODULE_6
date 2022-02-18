import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCheckPostComponent } from './dialog-check-post.component';

describe('DialogCheckPostComponent', () => {
  let component: DialogCheckPostComponent;
  let fixture: ComponentFixture<DialogCheckPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCheckPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCheckPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
