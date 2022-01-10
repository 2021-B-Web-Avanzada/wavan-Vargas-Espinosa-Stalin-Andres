import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGoalsComponent } from './banner-goals.component';

describe('BannerGoalsComponent', () => {
  let component: BannerGoalsComponent;
  let fixture: ComponentFixture<BannerGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
