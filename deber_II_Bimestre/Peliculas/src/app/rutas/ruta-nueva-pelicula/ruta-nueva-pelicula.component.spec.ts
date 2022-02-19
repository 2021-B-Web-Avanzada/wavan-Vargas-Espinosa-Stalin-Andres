import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevaPeliculaComponent } from './ruta-nueva-pelicula.component';

describe('RutaNuevaPeliculaComponent', () => {
  let component: RutaNuevaPeliculaComponent;
  let fixture: ComponentFixture<RutaNuevaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevaPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
