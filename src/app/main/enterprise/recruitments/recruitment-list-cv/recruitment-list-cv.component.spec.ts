import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentListCvComponent } from './recruitment-list-cv.component';

describe('RecruitmentListCvComponent', () => {
  let component: RecruitmentListCvComponent;
  let fixture: ComponentFixture<RecruitmentListCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentListCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentListCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
