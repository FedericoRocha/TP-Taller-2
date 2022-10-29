import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarZapatillaComponent } from './buscar-zapatilla.component';

describe('BuscarZapatillaComponent', () => {
  let component: BuscarZapatillaComponent;
  let fixture: ComponentFixture<BuscarZapatillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarZapatillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarZapatillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
