import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaCinesComponent } from './ruta-lista-cines.component';

describe('RutaListaCinesComponent', () => {
  let component: RutaListaCinesComponent;
  let fixture: ComponentFixture<RutaListaCinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaCinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
