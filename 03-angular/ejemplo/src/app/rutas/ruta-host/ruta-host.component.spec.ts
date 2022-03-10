import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHostComponent } from './ruta-host.component';

describe('RutaHostComponent', () => {
  let component: RutaHostComponent;
  let fixture: ComponentFixture<RutaHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
