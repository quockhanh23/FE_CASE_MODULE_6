import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecruitmentsCreateComponent} from './recruitments-create.component';

describe('RecruitmentsCreateComponent', () => {
  let component: RecruitmentsCreateComponent;
  let fixture: ComponentFixture<RecruitmentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecruitmentsCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
