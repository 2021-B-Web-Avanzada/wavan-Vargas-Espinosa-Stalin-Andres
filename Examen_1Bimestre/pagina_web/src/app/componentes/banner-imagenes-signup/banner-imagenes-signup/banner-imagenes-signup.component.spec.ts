import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImagenesSignupComponent } from './banner-imagenes-signup.component';

describe('BannerImagenesSignupComponent', () => {
  let component: BannerImagenesSignupComponent;
  let fixture: ComponentFixture<BannerImagenesSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerImagenesSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImagenesSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
