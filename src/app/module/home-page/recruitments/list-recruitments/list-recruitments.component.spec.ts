import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecruitmentsComponent } from './list-recruitments.component';

describe('ListRecruitmentsComponent', () => {
  let component: ListRecruitmentsComponent;
  let fixture: ComponentFixture<ListRecruitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecruitmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecruitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
