import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentsListComponent } from './recruitments-list.component';

describe('RecruitmentsListComponent', () => {
  let component: RecruitmentsListComponent;
  let fixture: ComponentFixture<RecruitmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
