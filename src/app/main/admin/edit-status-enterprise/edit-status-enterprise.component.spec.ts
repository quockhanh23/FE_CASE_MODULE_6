import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatusEnterpriseComponent } from './edit-status-enterprise.component';

describe('EditStatusEnterpriseComponent', () => {
  let component: EditStatusEnterpriseComponent;
  let fixture: ComponentFixture<EditStatusEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStatusEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatusEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
