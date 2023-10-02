/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {AutoCompleteCompleteEvent} from 'primeng/autocomplete';
import {KeyFilterPattern} from 'primeng/keyfilter';
import {Observable} from 'rxjs';

export enum ElementType {
  TextElement = 'text',
  TextAreaElement = 'textArea',
  NumberElement = 'number',
  GroupElement = 'group',
  CalendarElement = 'calendar',
  DropdownElement = 'dropdown',
  InputGroupElement = 'inputGroup',
  GridLayoutElement = 'gridLayout',
  GridColumnElement = 'gridColumn',
  AutocompleteElement = 'autocomplete',
  CheckboxElement = 'checkbox',
  CardElement = 'card'
}

export interface FormDefinition {
  title?: string,
  elements: Elements,
  actions: Actions
}

export type Element = TextElement | TextAreaElement | NumberElement | GroupElement | CalendarElement | DropdownElement | InputGroupElement | AutoCompleteElement | CheckboxElement | CardElement | GridLayoutElement | GridColumnElement
export type Elements = { [key: string]: Element }

export type LayoutElements = { [key: string]: GridColumnElement }

export interface BaseElement {
  title?: string,
  cssClass?: string,
  validators?: FormValidator[]
}

export interface DisableElement {
  disabled?: boolean;
}

export interface UnitElement {
  icon?: string;
  unit?: string;
  keyFilter?: RegExp | KeyFilterPattern | null | undefined;
}

export interface TextElement extends BaseElement, DisableElement {
  type: ElementType.TextElement;
}

export interface TextAreaElement extends BaseElement, DisableElement {
  type: ElementType.TextAreaElement;
  rows: number;
  cols?: number;
}

export enum NumberMode {
  Decimal = 'decimal',
  Currency = 'currency'
}

export interface NumberElement extends BaseElement, DisableElement {
  type: ElementType.NumberElement;
  mode?: NumberMode;
  currency?: string;
  locale?: string;
  minFractionDigits?: number;
  maxFractionDigits?: number;
}

export interface InputGroupElement extends BaseElement, DisableElement, UnitElement {
  type: ElementType.InputGroupElement;
}

export interface GroupElement extends BaseElement, DisableElement {
  type: ElementType.GroupElement;
  elements: Elements;
}

export interface CalendarElement extends BaseElement, DisableElement {
  type: ElementType.CalendarElement;
  dateFormat: string;
}

export interface DropdownElement extends BaseElement, DisableElement {
  type: ElementType.DropdownElement;
  options: Observable<any>;
}

export interface AutoCompleteElement extends BaseElement, DisableElement {
  type: ElementType.AutocompleteElement;
  suggestions: Observable<any>;
  field?: string;
  filter?: (event: AutoCompleteCompleteEvent, data: any[]) => any[];
}

export interface CheckboxElement extends BaseElement, DisableElement {
  type: ElementType.CheckboxElement,
  value: string
}

export interface CardElement extends BaseElement {
  type: ElementType.CardElement,
  elements: Elements
}

// region Layout Elements

export interface LayoutElement {
  class: string;
}

export interface GridLayoutElement extends LayoutElement {
  type: ElementType.GridLayoutElement,
  elements: LayoutElements
}

export interface GridColumnElement extends LayoutElement {
  type: ElementType.GridColumnElement,
  elements: Elements
}

// endregion

// region Buttons

export enum ActionType {
  Button = 'button',
  CancelButton = 'cancel-button'
}

export interface AlignableButton {
  align?: Align;
}

export enum Align {
  left = 'left',
  right = 'right',
  center = 'center'
}

export interface FormButton extends AlignableButton, DisableElement {
  type: ActionType.Button,
  label: string
}

export interface CancelButton extends AlignableButton, DisableElement {
  type: ActionType.CancelButton,
  label: string
}

export type ActionButton = FormButton | CancelButton;

export type Actions = { [key: string]: (ActionButton) };

// endregion

// region Validation

export enum ValidationType {
  Min = 'min',
  Max = 'max',
  Required = 'required',
  Email = 'email',
  MinLength = 'minlength',
  MaxLength = 'maxlength',
  Pattern = 'pattern'
}

export type FormValidator = RequiredFormValidator | MinLengthFormValidator | MaxLengthFormValidator | MinFormValidator | MaxFormValidator | PatternFormValidator | EmailFormValidator

export interface BaseFormValidator {
  validationType: ValidationType,
  messageKey: string
  messageArgs?: any
}

export interface RequiredFormValidator extends BaseFormValidator {

}

export interface MinLengthFormValidator extends BaseFormValidator {
  minLength: number;
}

export interface MaxLengthFormValidator extends BaseFormValidator {
  maxLength: number;
}

export interface MinFormValidator extends BaseFormValidator {
  min: number;
}

export interface MaxFormValidator extends BaseFormValidator {
  max: number;
}

export interface PatternFormValidator extends BaseFormValidator {
  pattern: RegExp | string;
}

export interface EmailFormValidator extends BaseFormValidator {
}


// endregion
