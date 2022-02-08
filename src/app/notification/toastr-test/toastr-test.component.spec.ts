import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrTestComponent } from './toastr-test.component';

describe('ToastrTestComponent', () => {
  let component: ToastrTestComponent;
  let fixture: ComponentFixture<ToastrTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
