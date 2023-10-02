/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {Component, OnInit} from '@angular/core';
import {AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {AutoCompleteElement} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';

@Component({
  selector: 'lib-autocomplete-element',
  templateUrl: './autocomplete-element.component.html',
  styleUrls: ['./autocomplete-element.component.css']
})
export class AutocompleteElementComponent extends BaseElementComponent<AutoCompleteElement> implements OnInit {

  suggestions: any[] = [];

  filteredSuggestions: any[] = [];

  filter(event: AutoCompleteCompleteEvent) {
    // this.filteredSuggestions = this.suggestions.filter(suggestion => suggestion[this.field.field!].toLowerCase().startsWith(event.query.toLowerCase()))

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

}
