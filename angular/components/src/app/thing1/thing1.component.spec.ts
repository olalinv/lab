import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thing1Component } from './thing1.component';

describe('Thing1Component', () => {
  let component: Thing1Component;
  let fixture: ComponentFixture<Thing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thing1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
