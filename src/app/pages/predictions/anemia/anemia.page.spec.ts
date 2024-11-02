import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnemiaPage } from './anemia.page';

describe('AnemiaPage', () => {
  let component: AnemiaPage;
  let fixture: ComponentFixture<AnemiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnemiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
