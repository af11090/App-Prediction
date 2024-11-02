import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Predict2Page } from './predict2.page';

describe('Predict2Page', () => {
  let component: Predict2Page;
  let fixture: ComponentFixture<Predict2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Predict2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
