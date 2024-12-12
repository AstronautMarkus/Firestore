import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasCreatePage } from './plantas-create.page';

describe('PlantasCreatePage', () => {
  let component: PlantasCreatePage;
  let fixture: ComponentFixture<PlantasCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
