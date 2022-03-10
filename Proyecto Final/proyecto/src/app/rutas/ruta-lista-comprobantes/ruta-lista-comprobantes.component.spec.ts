import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaComprobantesComponent } from './ruta-lista-comprobantes.component';

describe('RutaListaComprobantesComponent', () => {
  let component: RutaListaComprobantesComponent;
  let fixture: ComponentFixture<RutaListaComprobantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaComprobantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
