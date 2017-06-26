import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanSheetsComponent } from './clean-sheets.component';

describe('CleanSheetsComponent', () => {
  let component: CleanSheetsComponent;
  let fixture: ComponentFixture<CleanSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
