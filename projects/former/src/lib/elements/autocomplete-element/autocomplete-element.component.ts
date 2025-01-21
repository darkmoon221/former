/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { BaseElementComponent } from '../base-element.component';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {
  AutoCompleteElement,
  AutoCompleteOptions,
  FilterProvider,
  isLocalFilterProvider,
  isObservableSuggestions,
  isRemoteSuggestions,
  isStaticSuggestions,
  ObservableSuggestions,
  RemoteSuggestions,
  StaticSuggestions,
  Suggestions,
} from '../../model/elements/autocomplete.model';

@Component({
  selector: 'lib-autocomplete-element',
  templateUrl: './autocomplete-element.component.html',
  styleUrls: ['./autocomplete-element.component.css'],
  standalone: false,
})
export class AutocompleteElementComponent extends BaseElementComponent<AutoCompleteElement> implements OnInit, AfterViewInit {
  @ViewChild('autoCompleteElement') elementRef?: ElementRef;

  private readonly http: HttpClient = inject(HttpClient);

  // This is the internal list of all available suggestions.
  internalSuggestions: any[] = [];

  // Filtered suggestions
  filteredSuggestions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  defaultFilter = (query: string, data: any[]) => {
    const result = data.filter(d => d.toLowerCase().includes(query.toLowerCase()));
    return result;
  };

  defaultComplexFilter = (query: string, field: string, data: any[]) => {
    return data.filter(d => d[field].toLowerCase().includes(query.toLowerCase()));
  };

  /**
   * Static suggestion can be a list of strings or a list of complex objects.
   * @param suggestions
   * @param query
   * @param field
   */
  handleStaticSuggestions(suggestions: StaticSuggestions, query: string, field?: string, filter?: FilterProvider): any[] {
    const data = suggestions.static;
    let filtered: any[] = [];
    if (this.isArrayOfStrings(data)) {
      filtered = this.defaultFilter(query, this.internalSuggestions);
      // filtered = this.filterWithFallback(filter, this.defaultFilter);
    } else {
      if (field) {
        filtered = this.defaultComplexFilter(query, field, this.internalSuggestions);
      } else {
        throw new Error('Need to provide a field to filter a complex data structure');
      }
    }
    return filtered;
  }

  // filterWithFallback(filter?: FilterProvider, defaultFilter: FilterProvider) {
  //   let result = defaultFilter;
  //   if (filter) {
  //     result = filter;
  //   }
  //   return result;
  // }

  // filterReworked(event: AutoCompleteCompleteEvent) {
  //   const query = event.query;
  //   const suggestions: Suggestions = this.field.suggestions;
  //   const filter = this.field.filter;
  //   const filterField = this.field.field;
  //
  //   if (isStaticSuggestions(suggestions)) {
  //     this.filteredSuggestions$.next(this.handleStaticSuggestions(suggestions, query, filterField, filter));
  //   } else if (isObservableSuggestions(suggestions)) {
  //   } else if (isRemoteSuggestions(suggestions)) {
  //   } else {
  //     console.warn('Provided suggestion type is not supported', suggestions);
  //   }
  // }

  filter(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    const query = event.query;

    const suggestions: Suggestions = this.field.suggestions;
    const filter = this.field.filter;

    if (filter) {
      if (isLocalFilterProvider(filter)) {
        filtered = filter.local(event, this.internalSuggestions, this.field.field);
      } else {
        const evaluated = eval(filter.remote);
        filtered = evaluated(event, this.internalSuggestions, this.field.field);
      }
      this.filteredSuggestions$.next(filtered);
    } else {
      if (isStaticSuggestions(suggestions)) {
        filtered = this.handleStaticSuggestions(suggestions, query, this.field.field);
        this.filteredSuggestions$.next(filtered);
      } else if (isObservableSuggestions(this.field.suggestions)) {
        if (!this.isArrayOfStrings(this.internalSuggestions)) {
          if (!this.field.field) {
            throw new Error('You have to provide a custom filter function or a field to filter on complex suggestions.');
          }

          for (const suggestion of this.internalSuggestions as any[]) {
            if (suggestion[this.field.field!].toLowerCase().includes(query.toLowerCase())) {
              filtered.push(suggestion);
            }
          }
        } else {
          for (const suggestion of this.internalSuggestions as any[]) {
            if (suggestion.toLowerCase().includes(query.toLowerCase())) {
              filtered.push(suggestion);
            }
          }
        }
        this.filteredSuggestions$.next(filtered);
      } else if (isRemoteSuggestions(this.field.suggestions)) {
        this.http.get<any[]>(this.field.suggestions.remote + '?name=' + query).subscribe(data => this.filteredSuggestions$.next(data as any[]));
      } else {
        console.error('Suggestion type unknown');
      }
    }
  }

  getAvailableFields(data: any[]) {
    if (data && data.length > 1) {
      return Object.getOwnPropertyNames(data[0]);
    } else {
      return '';
    }
  }

  checkSuggestionsIncludesField(field: string): boolean {
    return this.internalSuggestions && this.internalSuggestions.every(i => Object.prototype.hasOwnProperty.call(i, field));
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.validateParameters();

    if (isRemoteSuggestions(this.element.value.suggestions)) {
      this.http.get<any[]>((this.element.value.suggestions as RemoteSuggestions).remote).subscribe(data => (this.internalSuggestions = data));
    }

    if (isStaticSuggestions(this.element.value.suggestions)) {
      this.internalSuggestions = (this.element.value.suggestions as StaticSuggestions).static;
      console.log('static');
    }

    if (isObservableSuggestions(this.element.value.suggestions)) {
      // TODO: destroy
      (this.element.value.suggestions as ObservableSuggestions).observable.subscribe(data => (this.internalSuggestions = data));
      console.log('observable');
    }

    // if (isObservable(this.element.value.suggestions)) {
    //   (this.field.suggestions as Observable<any>)?.subscribe((data: any) => (this.internalSuggestions = data));
    // } else {
    //   this.internalSuggestions = this.element.value.suggestions as any[];
    // }
    // this.field.suggestions.subscribe((data: any) => (this.suggestions = data));
  }

  ngAfterViewInit(): void {
    if (this.field.options) {
      Object.keys(this.field.options).forEach(option => {
        // if (this.elementRef?.hasOwnProperty(option)) {
        if (Object.prototype.hasOwnProperty.call(this.elementRef, option)) {
          (this.elementRef as any)[option] = (this.field.options as any)[option as keyof AutoCompleteOptions];
        }
      });
    }
  }

  isArrayOfStrings(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === 'string');
  }

  validateParameters(): void {
    if (this.element.value.suggestions) {
      if (isStaticSuggestions(this.element.value.suggestions)) {
        if (!this.element.value.field && !this.isArrayOfStrings(this.element.value.suggestions.static)) {
          throw new Error('You have to provide a field to filter on complex static suggestions.');
        }
      }

      // if (isObservableSuggestions(this.element.value.suggestions)) {
      //   if (!this.element.value.field && !this.isArrayOfStrings(this.element.value.suggestions.observable)) {
      //     throw new Error('You have to provide a field to filter on complex static suggestions.');
      //   }
      // }
    }

    // if (!isObservable(this.element.value.suggestions)) {
    //   if (this.element.value.suggestions && !this.element.value.field && !this.isArrayOfStrings(this.element.value.suggestions)) {
    //     throw new Error('You have to provide a field to filter on complex static suggestions.');
    //   }
    // }
  }
}
