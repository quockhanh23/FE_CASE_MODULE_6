import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnterpriseOfAdminComponent } from './list-enterprise-of-admin.component';

describe('ListEnterpriseOfAdminComponent', () => {
  let component: ListEnterpriseOfAdminComponent;
  let fixture: ComponentFixture<ListEnterpriseOfAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnterpriseOfAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnterpriseOfAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
