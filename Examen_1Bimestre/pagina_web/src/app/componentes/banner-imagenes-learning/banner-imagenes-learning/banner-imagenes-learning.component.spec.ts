import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImagenesLearningComponent } from './banner-imagenes-learning.component';

describe('BannerImagenesLearningComponent', () => {
  let component: BannerImagenesLearningComponent;
  let fixture: ComponentFixture<BannerImagenesLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerImagenesLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImagenesLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
