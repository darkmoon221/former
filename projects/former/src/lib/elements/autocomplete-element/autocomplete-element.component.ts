/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {AutoCompleteElement, AutoCompleteOptions} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';

@Component({
  selector: 'lib-autocomplete-element',
  templateUrl: './autocomplete-element.component.html',
  styleUrls: ['./autocomplete-element.component.css']
})
export class AutocompleteElementComponent extends BaseElementComponent<AutoCompleteElement> implements OnInit, AfterViewInit {

  @ViewChild("autoCompleteElement") elementRef?: ElementRef

  suggestions: any[] = [];

  filteredSuggestions: any[] = [];

  filter(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    if (this.field.filter) {
      filtered = this.field.filter(event, this.suggestions);
    } else {

      if (this.field.field) {
        for (let i = 0; i < (this.suggestions as any[]).length; i++) {
          let suggestion = (this.suggestions as any[])[i];
          if (suggestion[this.field.field!].toLowerCase().includes(query.toLowerCase())) {
            filtered.push(suggestion);
          }
        }
      } else {
        for (let i = 0; i < (this.suggestions as any[]).length; i++) {
          let suggestion = (this.suggestions as any[])[i];
          if (suggestion.toLowerCase().toLowerCase().includes(query.toLowerCase())) {
            filtered.push(suggestion);
          }
        }
      }
    }
    this.filteredSuggestions = filtered;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.field.suggestions.subscribe(data => this.suggestions = data);
  }

  ngAfterViewInit(): void {
    if (this.field.options) {
      Object.keys(this.field.options).forEach(option => {
        if (this.elementRef?.hasOwnProperty(option)) {
          (this.elementRef as any)[option] = (this.field.options as any)[option as keyof AutoCompleteOptions]
        }
      })
    }
  }

}
