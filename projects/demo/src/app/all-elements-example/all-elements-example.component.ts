/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { AfterContentChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ElementType, FormDefinition } from 'former';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { of } from 'rxjs';

@Component({
  selector: 'app-all-elements-example',
  templateUrl: './all-elements-example.component.html',
  styleUrls: ['./all-elements-example.component.scss'],
  standalone: false,
})
export class AllElementsExampleComponent implements AfterContentChecked {
  readonly cdr = inject(ChangeDetectorRef);

  formValues: any = {
    displayText: 'Test text to display',
    dropdownWithId: 'en',
  };

  basicSuggestions$ = of(['Deutschland', 'United Kingdom']);

  suggestions$ = of([
    { code: 'de', name: 'Deutschland' },
    { code: 'en', name: 'United Kingdom' },
  ]);

  dropdownOptions$ = of([
    { code: 'de', name: 'DE', additional: 'de' },
    { code: 'en', name: 'EN', additional: 'en' },
  ]);

  // Custom autoCompleteFilter
  countryFilter = (event: AutoCompleteCompleteEvent, data: any[]) => {
    console.log(
      'Custom filter',
      event.query,
      data.filter(d => d.toLowerCase().startsWith(event.query.toLowerCase()))
    );
    return data.filter(d => d.toLowerCase().startsWith(event.query.toLowerCase()));
  };

  formDefinition: FormDefinition = {
    title: 'All elements example',
    elements: {
      autoComplete: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete',
        suggestions: this.suggestions$,
        field: 'name',
      },
      autocompleteCustom: {
        type: ElementType.AutocompleteElement,
        title: 'Autocomplete Custom',
        suggestions: this.basicSuggestions$,
        filter: this.countryFilter,
      },
      calendar: {
        type: ElementType.CalendarElement,
        title: 'Calendar',
        dateFormat: 'dd.mm.yy',
      },
      checkbox: {
        type: ElementType.CheckboxElement,
        title: 'Checkbox',
        value: 'isChecked',
      },
      dropdown: {
        type: ElementType.DropdownElement,
        title: 'Dropdown',
        options: this.dropdownOptions$,
      },
      dropdownWithId: {
        type: ElementType.DropdownElement,
        title: 'Dropdown with ID',
        options: this.dropdownOptions$,
        optionLabel: 'name',
        optionValue: 'additional',
      },
      inputGroup: {
        type: ElementType.InputGroupElement,
        title: 'Inputgroup',
        unit: '€',
      },
      inputGroupWithKeyFilter: {
        type: ElementType.InputGroupElement,
        title: 'Inputgroup with keyfilter',
        unit: '€',
        keyFilter: 'money',
      },
      number: {
        type: ElementType.NumberElement,
        title: 'Number input',
        maxFractionDigits: 2,
        minFractionDigits: 2,
      },
      text: {
        type: ElementType.TextElement,
        title: 'Text input',
      },
      textArea: {
        type: ElementType.TextAreaElement,
        title: 'Text area',
        rows: 10,
      },
      card: {
        type: ElementType.CardElement,
        title: 'Card',
        cssClass: 'mt-4',
        elements: {
          displayText: {
            type: ElementType.DisplayTextElement,
            title: 'DisplayText',
          },
        },
      },
    },
    actions: {},
  };

  formChanged($event: any) {
    this.formValues = $event;
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
