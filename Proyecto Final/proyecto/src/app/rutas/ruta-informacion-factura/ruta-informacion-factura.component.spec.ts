import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInformacionFacturaComponent } from './ruta-informacion-factura.component';

describe('RutaInformacionFacturaComponent', () => {
  let component: RutaInformacionFacturaComponent;
  let fixture: ComponentFixture<RutaInformacionFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInformacionFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInformacionFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
