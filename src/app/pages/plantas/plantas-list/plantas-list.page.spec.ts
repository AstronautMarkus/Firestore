import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasListPage } from './plantas-list.page';

describe('PlantasListPage', () => {
  let component: PlantasListPage;
  let fixture: ComponentFixture<PlantasListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
