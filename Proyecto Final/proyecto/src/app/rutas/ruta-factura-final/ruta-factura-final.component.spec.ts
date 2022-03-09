import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFacturaFinalComponent } from './ruta-factura-final.component';

describe('RutaFacturaFinalComponent', () => {
  let component: RutaFacturaFinalComponent;
  let fixture: ComponentFixture<RutaFacturaFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaFacturaFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFacturaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
