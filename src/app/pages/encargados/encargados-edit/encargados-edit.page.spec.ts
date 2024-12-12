import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncargadosEditPage } from './encargados-edit.page';

describe('EncargadosEditPage', () => {
  let component: EncargadosEditPage;
  let fixture: ComponentFixture<EncargadosEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
