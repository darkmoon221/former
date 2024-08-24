import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.enum';
import {TestingModule} from '../../testing/testing.module';

import { InputGroupElementComponent } from './input-group-element.component';

describe('InputGroupElementComponent', () => {
  let component: InputGroupElementComponent;
  let fixture: ComponentFixture<InputGroupElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('inputGroup', new FormControl(''))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [InputGroupElementComponent]
    });
    fixture = TestBed.createComponent(InputGroupElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'inputGroup',
      value: {
        type: ElementType.InputGroupElement,
        title: 'InputGroup'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
