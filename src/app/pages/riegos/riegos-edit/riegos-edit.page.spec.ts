import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiegosEditPage } from './riegos-edit.page';

describe('RiegosEditPage', () => {
  let component: RiegosEditPage;
  let fixture: ComponentFixture<RiegosEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiegosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
