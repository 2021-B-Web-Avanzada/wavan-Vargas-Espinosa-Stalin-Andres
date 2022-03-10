import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarPlatoComponent } from './ruta-editar-plato.component';

describe('RutaEditarPlatoComponent', () => {
  let component: RutaEditarPlatoComponent;
  let fixture: ComponentFixture<RutaEditarPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
