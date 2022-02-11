import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentsDetailsComponent } from './recruitments-details.component';

describe('RecruitmentsDetailsComponent', () => {
  let component: RecruitmentsDetailsComponent;
  let fixture: ComponentFixture<RecruitmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
