import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoClienteComponent } from './ruta-nuevo-cliente.component';

describe('RutaNuevoClienteComponent', () => {
  let component: RutaNuevoClienteComponent;
  let fixture: ComponentFixture<RutaNuevoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
