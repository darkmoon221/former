import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import { TextAreaElementComponent } from './text-area-element.component';

describe('TextAreaElementComponent', () => {
  let component: TextAreaElementComponent;
  let fixture: ComponentFixture<TextAreaElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('textArea', new FormControl(''))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [TextAreaElementComponent]
    });
    fixture = TestBed.createComponent(TextAreaElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'textArea',
      value: {
        type: ElementType.TextAreaElement,
        title: 'Textarea',
        rows: 5
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
