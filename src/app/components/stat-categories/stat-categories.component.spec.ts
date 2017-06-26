import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCategoriesComponent } from './stat-categories.component';

describe('StatCategoriesComponent', () => {
  let component: StatCategoriesComponent;
  let fixture: ComponentFixture<StatCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
