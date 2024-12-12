import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncargadosListPage } from './encargados-list.page';

describe('EncargadosListPage', () => {
  let component: EncargadosListPage;
  let fixture: ComponentFixture<EncargadosListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
