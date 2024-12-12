import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncargadosDetailPage } from './encargados-detail.page';

describe('EncargadosDetailPage', () => {
  let component: EncargadosDetailPage;
  let fixture: ComponentFixture<EncargadosDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
