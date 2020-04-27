import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsForConnectedPage } from './tabs-for-connected.page';

describe('TabsForConnectedPage', () => {
  let component: TabsForConnectedPage;
  let fixture: ComponentFixture<TabsForConnectedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsForConnectedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsForConnectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
