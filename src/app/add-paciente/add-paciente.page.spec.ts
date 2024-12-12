import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPacientePage } from './add-paciente.page';

describe('AddPacientePage', () => {
  let component: AddPacientePage;
  let fixture: ComponentFixture<AddPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
