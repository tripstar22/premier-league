import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LukakuComponent } from './lukaku.component';

describe('LukakuComponent', () => {
  let component: LukakuComponent;
  let fixture: ComponentFixture<LukakuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LukakuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LukakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
