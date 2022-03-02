import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImagenesModuloComponent } from './banner-imagenes-modulo.component';

describe('BannerImagenesModuloComponent', () => {
  let component: BannerImagenesModuloComponent;
  let fixture: ComponentFixture<BannerImagenesModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerImagenesModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImagenesModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
