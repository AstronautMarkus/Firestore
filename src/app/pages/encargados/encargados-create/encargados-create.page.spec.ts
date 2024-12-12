import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncargadosCreatePage } from './encargados-create.page';

describe('EncargadosCreatePage', () => {
  let component: EncargadosCreatePage;
  let fixture: ComponentFixture<EncargadosCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadosCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
