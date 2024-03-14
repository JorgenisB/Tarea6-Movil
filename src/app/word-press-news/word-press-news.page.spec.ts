import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordPressNewsPage } from './word-press-news.page';

describe('WordPressNewsPage', () => {
  let component: WordPressNewsPage;
  let fixture: ComponentFixture<WordPressNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WordPressNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
