import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Predict1Page } from './predict1.page';

describe('Predict1Page', () => {
  let component: Predict1Page;
  let fixture: ComponentFixture<Predict1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Predict1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
