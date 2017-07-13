import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LukakuGraphsComponent } from './lukaku-graphs.component';

describe('LukakuGraphsComponent', () => {
  let component: LukakuGraphsComponent;
  let fixture: ComponentFixture<LukakuGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LukakuGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LukakuGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
