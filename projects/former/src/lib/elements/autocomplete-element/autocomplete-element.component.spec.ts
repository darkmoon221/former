import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import { AutocompleteElementComponent } from './autocomplete-element.component';

describe('AutocompleteElementComponent', () => {
  let component: AutocompleteElementComponent;
  let fixture: ComponentFixture<AutocompleteElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl('autocomplete', new FormControl(''))

  const suggestions$ = of([
      {code: 'de', name: 'Deutschland'},
      {code: 'en', name: 'United Kingdom'}
    ]
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AutocompleteElementComponent]
    });
    fixture = TestBed.createComponent(AutocompleteElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Auocomplete',
        suggestions: suggestions$,
        field: 'name'
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
