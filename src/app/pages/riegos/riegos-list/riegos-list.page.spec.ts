import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiegosListPage } from './riegos-list.page';

describe('RiegosListPage', () => {
  let component: RiegosListPage;
  let fixture: ComponentFixture<RiegosListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiegosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
