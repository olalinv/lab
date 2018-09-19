import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thing2Component } from './thing2.component';

describe('Thing2Component', () => {
  let component: Thing2Component;
  let fixture: ComponentFixture<Thing2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
