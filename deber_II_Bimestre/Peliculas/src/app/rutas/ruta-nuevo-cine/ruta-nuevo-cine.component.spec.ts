import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoCineComponent } from './ruta-nuevo-cine.component';

describe('RutaNuevoCineComponent', () => {
  let component: RutaNuevoCineComponent;
  let fixture: ComponentFixture<RutaNuevoCineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevoCineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
