import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import { TextElementComponent } from './text-element.component';

describe('TextElementComponent', () => {
  let component: TextElementComponent;
  let fixture: ComponentFixture<TextElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('text', new FormControl(''))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [TextElementComponent]
    });
    fixture = TestBed.createComponent(TextElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'text',
      value: {
        type: ElementType.TextElement,
        title: 'Text'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
