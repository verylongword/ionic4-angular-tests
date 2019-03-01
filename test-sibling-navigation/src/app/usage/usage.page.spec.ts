import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagePage } from './usage.page';

describe('UsagePage', () => {
  let component: UsagePage;
  let fixture: ComponentFixture<UsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
