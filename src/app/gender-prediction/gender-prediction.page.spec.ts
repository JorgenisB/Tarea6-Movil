import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenderPredictionPage } from './gender-prediction.page';

describe('GenderPredictionPage', () => {
  let component: GenderPredictionPage;
  let fixture: ComponentFixture<GenderPredictionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GenderPredictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
