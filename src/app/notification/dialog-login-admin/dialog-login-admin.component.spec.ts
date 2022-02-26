import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginAdminComponent } from './dialog-login-admin.component';

describe('DialogLoginAdminComponent', () => {
  let component: DialogLoginAdminComponent;
  let fixture: ComponentFixture<DialogLoginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLoginAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
