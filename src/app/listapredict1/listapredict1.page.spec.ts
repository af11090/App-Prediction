import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Listapredict1Page } from './listapredict1.page';

describe('Listapredict1Page', () => {
  let component: Listapredict1Page;
  let fixture: ComponentFixture<Listapredict1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Listapredict1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
