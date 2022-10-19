import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDescripcionComponent } from './producto-descripcion.component';

describe('ProductoDescripcionComponent', () => {
  let component: ProductoDescripcionComponent;
  let fixture: ComponentFixture<ProductoDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDescripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
