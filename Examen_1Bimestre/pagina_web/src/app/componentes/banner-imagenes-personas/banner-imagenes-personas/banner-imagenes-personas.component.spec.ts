import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImagenesPersonasComponent } from './banner-imagenes-personas.component';

describe('BannerImagenesPersonasComponent', () => {
  let component: BannerImagenesPersonasComponent;
  let fixture: ComponentFixture<BannerImagenesPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerImagenesPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImagenesPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
