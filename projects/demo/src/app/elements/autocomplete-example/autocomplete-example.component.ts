import { AfterContentChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ElementType, FormDefinition } from 'former';
import { of } from 'rxjs';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrl: './autocomplete-example.component.scss',
  standalone: false,
})
export class AutocompleteExampleComponent implements AfterContentChecked {
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

  // Custom autoCompleteFilter
  countryFilter = (event: AutoCompleteCompleteEvent, data: any[]) => {
    return data.filter(d => d.toLowerCase().startsWith(event.query.toLowerCase()));
  };

  countryFilterComplex = (event: AutoCompleteCompleteEvent, data: any[], field?: string) => {
    if (!field) {
      throw Error('You have to provide a filter filed');
    }
    return data.filter(d => d[field].toLowerCase().startsWith(event.query.toLowerCase()));
  };

  formDefinition: FormDefinition = {
    title: 'All elements example',
    elements: {
      autoCompleteStaticSimple: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with static simple data',
        suggestions: {
          static: ['Deutschland', 'United Kingdom'],
        },
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autoCompleteStaticComplex: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with static complex data',
        suggestions: {
          static: [
            { code: 'de', name: 'Deutschland', additional: 'de' },
            { code: 'en', name: 'United Kingdom', additional: 'en' },
          ],
        },
        field: 'name',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autoCompleteObservableSimple: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with observable simple data',
        suggestions: {
          observable: this.basicSuggestions$,
        },
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteObservableComplex: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with observable complex data',
        suggestions: {
          observable: this.suggestions$,
        },
        field: 'name',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteObservableSimpleWithCustomFilter: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with observable complex data and custom filter',
        suggestions: {
          observable: this.basicSuggestions$,
        },
        filter: {
          local: this.countryFilter,
        },
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteObservableComplexWithCustomFilter: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with observable complex data and custom filter',
        suggestions: {
          observable: this.suggestions$,
        },
        filter: {
          local: this.countryFilterComplex,
        },
        field: 'name',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteObservableSimpleWithScriptFilter: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with observable simple data and script filter',
        suggestions: {
          observable: this.basicSuggestions$,
        },
        filter: {
          remote: '(event, data) => data.filter(d => d.toLowerCase().startsWith(event.query.toLowerCase()))',
        },
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteObservableComplexWithScriptFilter: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with observable complex data and script filter',
        suggestions: {
          observable: this.suggestions$,
        },
        filter: {
          remote: '(event, data, field) => data.filter(d => d[field].toLowerCase().startsWith(event.query.toLowerCase()))',
        },
        field: 'name',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteRemoteComplex: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with remote complex data',
        suggestions: {
          remote: '/assets/suggestions/country.json',
        },
        field: 'name',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
      },
      autocompleteRemoteComplexWithScriptFilter: {
        type: ElementType.AutocompleteElement,
        title: 'Auto complete with remote complex data and script filter',
        suggestions: {
          remote: '/assets/suggestions/country.json',
        },
        filter: {
          remote: '(event, data, field) => data.filter(d => d[field].toLowerCase().startsWith(event.query.toLowerCase()))',
        },
        field: 'name',
        wrapperClass: 'mt-6',
        floatLabel: 'on',
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
