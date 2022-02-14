import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentsMyListComponent } from './recruitments-my-list.component';

describe('RecruitmentsMyListComponent', () => {
  let component: RecruitmentsMyListComponent;
  let fixture: ComponentFixture<RecruitmentsMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentsMyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentsMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
