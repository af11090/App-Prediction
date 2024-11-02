import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeveridadPage } from './severidad.page';

describe('SeveridadPage', () => {
  let component: SeveridadPage;
  let fixture: ComponentFixture<SeveridadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
