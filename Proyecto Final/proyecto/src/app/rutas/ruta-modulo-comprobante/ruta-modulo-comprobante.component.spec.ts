import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaModuloComprobanteComponent } from './ruta-modulo-comprobante.component';

describe('RutaModuloComprobanteComponent', () => {
  let component: RutaModuloComprobanteComponent;
  let fixture: ComponentFixture<RutaModuloComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaModuloComprobanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaModuloComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
