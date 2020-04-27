import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFbPage } from './tab-fb.page';

describe('TabFbPage', () => {
  let component: TabFbPage;
  let fixture: ComponentFixture<TabFbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
