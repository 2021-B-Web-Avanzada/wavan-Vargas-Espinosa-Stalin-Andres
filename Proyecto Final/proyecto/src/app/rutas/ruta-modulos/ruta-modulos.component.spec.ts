import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaModulosComponent } from './ruta-modulos.component';

describe('RutaModulosComponent', () => {
  let component: RutaModulosComponent;
  let fixture: ComponentFixture<RutaModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
