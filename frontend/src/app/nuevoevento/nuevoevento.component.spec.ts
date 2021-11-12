import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoeventoComponent } from './nuevoevento';

describe('NuevoeventoComponent', () => {
  let component: NuevoeventoComponent;
  let fixture: ComponentFixture<NuevoeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
