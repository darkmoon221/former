import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.enum';
import {TestingModule} from '../../testing/testing.module';

import { CheckboxElementComponent } from './checkbox-element.component';

describe('CheckboxElementComponent', () => {
  let component: CheckboxElementComponent;
  let fixture: ComponentFixture<CheckboxElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('checkbox', new FormControl(''))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CheckboxElementComponent]
    });
    fixture = TestBed.createComponent(CheckboxElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'checkbox',
      value: {
        type: ElementType.CheckboxElement,
        title: 'Checkbox',
        value: 'isChecked'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
