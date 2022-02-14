import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEnterpriseComponent } from './home-page-enterprise.component';

describe('HomePageEnterpriseComponent', () => {
  let component: HomePageEnterpriseComponent;
  let fixture: ComponentFixture<HomePageEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageEnterpriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
