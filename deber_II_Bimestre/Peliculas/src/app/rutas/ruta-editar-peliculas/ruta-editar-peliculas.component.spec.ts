import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarPeliculasComponent } from './ruta-editar-peliculas.component';

describe('RutaEditarPeliculasComponent', () => {
  let component: RutaEditarPeliculasComponent;
  let fixture: ComponentFixture<RutaEditarPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
