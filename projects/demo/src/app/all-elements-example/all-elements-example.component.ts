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
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-all-elements-example',
  templateUrl: './all-elements-example.component.html',
  styleUrls: ['./all-elements-example.component.scss'],
  standalone: false,
})
export class AllElementsExampleComponent implements AfterContentChecked {
  readonly cdr = inject(ChangeDetectorRef);

  activeItem: MenuItem | undefined;
  items: MenuItem[] = [
    {
      label: 'Autocomplete',
      routerLink: 'autocomplete',
    },
    {
      label: 'Intermediate',
      routerLink: 'intermediate',
    },
  ];

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
      calendar: {
        type: ElementType.CalendarElement,
        title: 'Calendar',
        dateFormat: 'dd.mm.yy',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
        styleClass: 'w-full',
      },
      checkbox: {
        type: ElementType.CheckboxElement,
        title: 'Checkbox',
        value: 'isChecked',
        wrapperClass: 'mt-6 flex items-center gap-1',
      },
      dropdown: {
        type: ElementType.DropdownElement,
        title: 'Dropdown',
        options: this.dropdownOptions$,
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      dropdownWithId: {
        type: ElementType.DropdownElement,
        title: 'Dropdown with ID',
        options: this.dropdownOptions$,
        optionLabel: 'name',
        optionValue: 'additional',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      inputGroup: {
        type: ElementType.InputGroupElement,
        title: 'Inputgroup',
        icon: '$',
        unit: '€',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      inputGroupWithKeyFilter: {
        type: ElementType.InputGroupElement,
        title: 'Inputgroup with keyfilter',
        unit: '€',
        keyFilter: 'money',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      number: {
        type: ElementType.NumberElement,
        title: 'Number input',
        maxFractionDigits: 2,
        minFractionDigits: 2,
        wrapperClass: 'mt-6',
        floatLabel: 'on',
        cssClass: 'w-full',
      },
      text: {
        type: ElementType.TextElement,
        title: 'Text input',
        cssClass: 'w-full',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      textArea: {
        type: ElementType.TextAreaElement,
        title: 'Text area',
        rows: 10,
        cssClass: 'w-full',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      card: {
        type: ElementType.CardElement,
        title: 'Card',
        cssClass: 'mt-12',
        elements: {
          displayText: {
            type: ElementType.DisplayTextElement,
            title: 'DisplayText',
            labelClass: 'underline font-medium',
            wrapperClass: 'flex flex-col gap-1',
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
