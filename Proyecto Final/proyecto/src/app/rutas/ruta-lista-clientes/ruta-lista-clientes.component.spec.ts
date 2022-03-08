import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaClientesComponent } from './ruta-lista-clientes.component';

describe('RutaListaClientesComponent', () => {
  let component: RutaListaClientesComponent;
  let fixture: ComponentFixture<RutaListaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
