import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaTipoComprobanteComponent } from './ruta-tipo-comprobante.component';

describe('RutaTipoComprobanteComponent', () => {
  let component: RutaTipoComprobanteComponent;
  let fixture: ComponentFixture<RutaTipoComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaTipoComprobanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaTipoComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
