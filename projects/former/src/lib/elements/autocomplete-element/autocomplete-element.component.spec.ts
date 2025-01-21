import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { ElementType } from '../../model/former.enum';
import { TestingModule } from '../../testing/testing.module';

import { AutocompleteElementComponent } from './autocomplete-element.component';

describe('AutocompleteElementComponent', () => {
  let component: AutocompleteElementComponent;
  let fixture: ComponentFixture<AutocompleteElementComponent>;

  const formGroup = new FormGroup({});
  formGroup.addControl('autocomplete', new FormControl(''));

  const suggestions$ = of([
    { code: 'de', name: 'Deutschland' },
    { code: 'en', name: 'United Kingdom' },
  ]);

  const simpleSuggestions$ = of(['Deutschland', 'United Kingdom']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AutocompleteElementComponent],
    });
    fixture = TestBed.createComponent(AutocompleteElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
  });

  it('with complex suggestion and filter field', () => {
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete',
        suggestions: { observable: suggestions$ },
        field: 'name',
      },
    };
    fixture.detectChanges();

    component.filter({ query: 'de' } as any);

    expect(component).toBeTruthy();
    expect(component.filteredSuggestions$.value).toEqual([{ code: 'de', name: 'Deutschland' }]);
  });

  it('with simple suggestion and no filter field', () => {
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete',
        suggestions: {
          observable: simpleSuggestions$,
        },
      },
    };
    fixture.detectChanges();

    component.filter({ query: 'de' } as any);

    expect(component).toBeTruthy();
    expect(component.filteredSuggestions$.value).toEqual(['Deutschland']);
  });

  it('with complex suggestion and no filter field', () => {
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete',
        suggestions: { observable: suggestions$ },
      },
    };
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(function (): any {
      component.filter({ query: 'de' } as any);
    }).toThrowError('You have to provide a custom filter function or a field to filter on complex suggestions.');
  });

  it('with suggestion, static suggestions and filter field', () => {
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete',
        // suggestions: suggestions$,
        field: 'name',
        suggestions: {
          static: [
            { code: 'de', name: 'Deutschland' },
            { code: 'en', name: 'United Kingdom' },
          ],
        },
      },
    };
    fixture.detectChanges();

    component.filter({ query: 'de' } as any);

    expect(component).toBeTruthy();
    expect(component.filteredSuggestions$.value).toEqual([{ code: 'de', name: 'Deutschland' }]);
  });

  it('with suggestion, complex static suggestions and no filter field', () => {
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete',
        // suggestions: suggestions$,
        suggestions: {
          static: [
            { code: 'de', name: 'Deutschland' },
            { code: 'en', name: 'United Kingdom' },
          ],
        },
      },
    };

    expect(function () {
      component.ngOnInit();
    }).toThrowError('You have to provide a field to filter on complex static suggestions.');
  });

  it('with suggestion, simple static suggestions and no filter field', () => {
    component.element = {
      key: 'autocomplete',
      value: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete',
        // suggestions: suggestions$,
        suggestions: { static: ['Deutschland', 'United Kingdom'] },
      },
    };
    fixture.detectChanges();

    component.filter({ query: 'de' } as any);

    expect(component).toBeTruthy();
    expect(component.filteredSuggestions$.value).toEqual(['Deutschland']);
  });
});
