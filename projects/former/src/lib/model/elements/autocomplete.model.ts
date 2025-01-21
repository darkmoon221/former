/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */

import { ElementType } from '../former.enum';
import { Observable } from 'rxjs';
import { BaseElement, DisableElement } from '../former.model';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ScrollerOptions } from 'primeng/api';

export type FilterProvider = LocalFilterProvider | RemoteFilterProvider;

export interface LocalFilterProvider {
  local: (event: AutoCompleteCompleteEvent, data: any[], field?: string) => any[];
}

export interface RemoteFilterProvider {
  remote: string;
}

export function isRemoteFilterProvider(value: FilterProvider): value is RemoteFilterProvider {
  return 'remote' in value;
}

export function isLocalFilterProvider(value: FilterProvider): value is LocalFilterProvider {
  return 'local' in value;
}

export type Suggestions = StaticSuggestions | ObservableSuggestions | RemoteSuggestions;

export interface RemoteSuggestions {
  remote: string;
}

export interface StaticSuggestions {
  static: any[];
}

export interface ObservableSuggestions {
  observable: Observable<any[]>;
}

/**
 * Checks, if the suggestion are remote suggestion, i.e. loaded by a specific REST endpoint
 */
export function isRemoteSuggestions(value: Suggestions): value is RemoteSuggestions {
  return 'remote' in value;
}

/**
 * Checks, if the suggestions are static suggestions, i.e. an array of plain strings or complex objects
 * @param value
 */
export function isStaticSuggestions(value: Suggestions): value is StaticSuggestions {
  return 'static' in value;
}

/**
 * Checks, if the suggestions are observable suggestions, i.e. suggestions provided by an observable as an array of plain strings or complex objects
 * @param value
 */
export function isObservableSuggestions(value: Suggestions): value is ObservableSuggestions {
  return 'observable' in value;
}

export interface AutoCompleteElement extends BaseElement, DisableElement {
  type: ElementType.AutocompleteElement;
  suggestions: Suggestions;
  field?: string;
  filter?: FilterProvider;
  width?: string;
  options?: AutoCompleteOptions;
}

// Reflects all properties from https://primeng.org/autocomplete
export interface AutoCompleteOptions {
  minLength?: number; // default 1
  delay?: number; // default 300
  style?: Record<string, any> | null | undefined;
  panelStyle?: Record<string, any> | null | undefined;
  styleClass?: string | undefined;
  panelStyleClass?: string | undefined;
  inputStyle?: Record<string, any> | null | undefined;
  inputId?: string | undefined;
  inputStyleClass?: string | undefined;
  placeholder?: string | undefined;
  readonly?: boolean | undefined;
  disabled?: boolean | undefined;
  scrollHeight?: string;
  lazy?: boolean;
  virtualScroll?: ScrollerOptions | undefined;
  virtualScrollItemSize?: number;
  virtualScrollOptions?: ScrollerOptions | undefined;
  maxLength?: number | undefined;
  name?: string;
  size?: number;
  appendTo?: any; // Target element to attach the overlay
  autoHighlight?: boolean;
  forceSelection?: boolean;
  type?: string;
  autoZIndex?: boolean;
  baseZIndex?: boolean;
}
