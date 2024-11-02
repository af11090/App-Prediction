import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoAnemiaPage } from './tipo-anemia.page';

describe('TipoAnemiaPage', () => {
  let component: TipoAnemiaPage;
  let fixture: ComponentFixture<TipoAnemiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnemiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
