import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarCinesComponent } from './ruta-editar-cines.component';

describe('RutaEditarCinesComponent', () => {
  let component: RutaEditarCinesComponent;
  let fixture: ComponentFixture<RutaEditarCinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarCinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
