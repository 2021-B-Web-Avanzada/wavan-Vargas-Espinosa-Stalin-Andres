import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInformacionConsumidorFinalComponent } from './ruta-informacion-consumidor-final.component';

describe('RutaInformacionConsumidorFinalComponent', () => {
  let component: RutaInformacionConsumidorFinalComponent;
  let fixture: ComponentFixture<RutaInformacionConsumidorFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInformacionConsumidorFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInformacionConsumidorFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
