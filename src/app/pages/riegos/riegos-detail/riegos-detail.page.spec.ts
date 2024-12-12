import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiegosDetailPage } from './riegos-detail.page';

describe('RiegosDetailPage', () => {
  let component: RiegosDetailPage;
  let fixture: ComponentFixture<RiegosDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiegosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
