import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemoPage } from './button-demo.page';

describe('ButtonDemoPage', () => {
  let component: ButtonDemoPage;
  let fixture: ComponentFixture<ButtonDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
