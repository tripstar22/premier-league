import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCategoriesComponent } from './article-categories.component';

describe('ArticleCategoriesComponent', () => {
  let component: ArticleCategoriesComponent;
  let fixture: ComponentFixture<ArticleCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
