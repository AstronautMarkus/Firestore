import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasDetailPage } from './plantas-detail.page';

describe('PlantasDetailPage', () => {
  let component: PlantasDetailPage;
  let fixture: ComponentFixture<PlantasDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
