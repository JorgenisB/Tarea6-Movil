import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolboxPage } from './toolbox.page';

describe('ToolboxPage', () => {
  let component: ToolboxPage;
  let fixture: ComponentFixture<ToolboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToolboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
