import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import {DropdownElementComponent} from './dropdown-element.component';

describe('DropdownElementComponent', () => {
  let component: DropdownElementComponent;
  let fixture: ComponentFixture<DropdownElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl("dropdown", new FormControl(''))

  const dropdownOptions$ = of([
    {code: 'de', name: 'DE'},
    {code: 'en', name: 'EN'}
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [DropdownElementComponent]
    });
    fixture = TestBed.createComponent(DropdownElementComponent);
    component = fixture.componentInstance;
    component.parentKey = "parentKey";
    component.formGroup = formGroup;
    component.element = {
      key: 'dropdown',
      value: {
        type: ElementType.DropdownElement,
        title: "Dropdown",
        options: dropdownOptions$
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
