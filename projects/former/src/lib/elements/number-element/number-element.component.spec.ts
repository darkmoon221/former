import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {TestingModule} from '../../testing/testing.module';

import { NumberElementComponent } from './number-element.component';
import {ElementType} from "../../model/former.enum";

describe('NumberElementComponent', () => {
  let component: NumberElementComponent;
  let fixture: ComponentFixture<NumberElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('number', new FormControl(''))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [NumberElementComponent]
    });
    fixture = TestBed.createComponent(NumberElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'number',
      value: {
        type: ElementType.NumberElement,
        title: 'Number'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
