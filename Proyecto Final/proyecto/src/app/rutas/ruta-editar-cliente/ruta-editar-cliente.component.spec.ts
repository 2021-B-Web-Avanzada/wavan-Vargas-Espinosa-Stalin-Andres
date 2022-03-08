import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarClienteComponent } from './ruta-editar-cliente.component';

describe('RutaEditarClienteComponent', () => {
  let component: RutaEditarClienteComponent;
  let fixture: ComponentFixture<RutaEditarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
