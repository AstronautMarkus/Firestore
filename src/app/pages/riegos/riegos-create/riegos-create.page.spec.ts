import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiegosCreatePage } from './riegos-create.page';

describe('RiegosCreatePage', () => {
  let component: RiegosCreatePage;
  let fixture: ComponentFixture<RiegosCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiegosCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
