import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.enum';
import {TestingModule} from '../../testing/testing.module';

import { CalendarElementComponent } from './calendar-element.component';

describe('CalendarElementComponent', () => {
  let component: CalendarElementComponent;
  let fixture: ComponentFixture<CalendarElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('calendar', new FormControl(''))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CalendarElementComponent]
    });
    fixture = TestBed.createComponent(CalendarElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'calendar',
      value: {
        type: ElementType.CalendarElement,
        title: 'Calendar',
        dateFormat: 'dd.mm.yy'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
