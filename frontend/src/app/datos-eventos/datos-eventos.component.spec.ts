import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEventosComponent } from './datos-eventos.component';

describe('DatosEventosComponent', () => {
  let component: DatosEventosComponent;
  let fixture: ComponentFixture<DatosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
