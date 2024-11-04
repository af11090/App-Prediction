import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabpacientePage } from './tabpaciente.page';

describe('TabpacientePage', () => {
  let component: TabpacientePage;
  let fixture: ComponentFixture<TabpacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabpacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
