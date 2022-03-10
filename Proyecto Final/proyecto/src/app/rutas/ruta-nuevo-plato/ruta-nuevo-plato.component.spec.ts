import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoPlatoComponent } from './ruta-nuevo-plato.component';

describe('RutaNuevoPlatoComponent', () => {
  let component: RutaNuevoPlatoComponent;
  let fixture: ComponentFixture<RutaNuevoPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevoPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
