import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Predict3Page } from './predict3.page';

describe('Predict3Page', () => {
  let component: Predict3Page;
  let fixture: ComponentFixture<Predict3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Predict3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
