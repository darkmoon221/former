import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTextElementComponent } from './display-text-element.component';

describe('DisplayTextElementComponent', () => {
  let component: DisplayTextElementComponent;
  let fixture: ComponentFixture<DisplayTextElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTextElementComponent]
    });
    fixture = TestBed.createComponent(DisplayTextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
