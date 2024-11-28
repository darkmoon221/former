import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTextElementComponent } from './display-text-element.component';
import { TestingModule } from '../../testing/testing.module';
import { FormControl, FormGroup } from '@angular/forms';
import { ElementType } from '../../model/former.enum';

describe('DisplayTextElementComponent', () => {
  let component: DisplayTextElementComponent;
  let fixture: ComponentFixture<DisplayTextElementComponent>;

  const formGroup = new FormGroup({});
  formGroup.addControl('display-text', new FormControl(''));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [DisplayTextElementComponent],
    });
    fixture = TestBed.createComponent(DisplayTextElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parent';
    component.formGroup = formGroup;
    component.element = {
      key: 'display-text',
      value: {
        type: ElementType.DisplayTextElement,
        title: 'Display-Text',
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
