import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaPeliculasComponent } from './ruta-lista-peliculas.component';

describe('RutaListaPeliculasComponent', () => {
  let component: RutaListaPeliculasComponent;
  let fixture: ComponentFixture<RutaListaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
