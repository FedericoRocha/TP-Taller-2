import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DoCheck , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CarrouselCardsComponent } from './carrousel-cards.component';

describe('CarrouselCardsComponent', () => {
  let component: CarrouselCardsComponent;
  let fixture: ComponentFixture<CarrouselCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
