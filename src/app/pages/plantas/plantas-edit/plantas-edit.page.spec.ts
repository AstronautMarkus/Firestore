import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasEditPage } from './plantas-edit.page';

describe('PlantasEditPage', () => {
  let component: PlantasEditPage;
  let fixture: ComponentFixture<PlantasEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
