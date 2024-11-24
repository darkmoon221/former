/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { KeyFilterPattern } from 'primeng/keyfilter';
import { Observable } from 'rxjs';
import { ActionType, Align, ElementType, NumberMode, ValidationType } from './former.enum';
import { ScrollerOptions } from 'primeng/api';

export interface FormDefinition {
  title?: string;
  elements: Elements;
  actions: Actions;
}

export type Element =
  | TextElement
  | DisplayTextElement
  | TextAreaElement
  | NumberElement
  | GroupElement
  | CalendarElement
  | DropdownElement
  | InputGroupElement
  | AutoCompleteElement
  | CheckboxElement
  | CardElement
  | GridLayoutElement
  | GridColumnElement
  | TemplateElement;

export type Elements = Record<string, Element>;

export type LayoutElements = Record<string, GridColumnElement>;

export interface BaseElement {
  title?: string;
  cssClass?: string;
  validators?: FormValidator[];
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

export interface DisplayTextElement extends BaseElement, DisableElement {
  type: ElementType.DisplayTextElement;
}

export interface TextAreaElement extends BaseElement, DisableElement {
  type: ElementType.TextAreaElement;
  rows: number;
  cols?: number;
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
  optionLabel?: string;
  optionValue?: string;
}

export interface AutoCompleteElement extends BaseElement, DisableElement {
  type: ElementType.AutocompleteElement;
  suggestions: Observable<any>;
  field?: string;
  filter?: (event: AutoCompleteCompleteEvent, data: any[]) => any[];
  width?: string;
  options?: AutoCompleteOptions;
}

export interface AutoCompleteOptions {
  minLength?: number;
  delay?: number;
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
  maxLength?: number | undefined;
}

export interface CheckboxElement extends BaseElement, DisableElement {
  type: ElementType.CheckboxElement;
  value: string;
}

export interface CardElement extends BaseElement {
  type: ElementType.CardElement;
  elements: Elements;
}

export interface TemplateElement extends BaseElement {
  type: ElementType.TemplateElement;
  templateId: string;
}

// region Layout Elements

export interface LayoutElement {
  class: string;
}

export interface GridLayoutElement extends LayoutElement {
  type: ElementType.GridLayoutElement;
  elements: LayoutElements;
}

export interface GridColumnElement extends LayoutElement {
  type: ElementType.GridColumnElement;
  elements: Elements;
}

// endregion

// region Buttons

export interface AlignableButton {
  align?: Align;
}

export interface FormButton extends AlignableButton, DisableElement {
  type: ActionType.Button;
  label: string;
}

export interface SubmitButton extends AlignableButton, DisableElement {
  type: ActionType.Submit;
  label: string;
}

export interface CancelButton extends AlignableButton, DisableElement {
  type: ActionType.CancelButton;
  label: string;
}

export type ActionButton = FormButton | SubmitButton | CancelButton;

export type Actions = Record<string, ActionButton>;

export interface ActionResult {
  action: ActionButton;
  payload: any;
}

// endregion

// region Validation

export type FormValidator = RequiredFormValidator | MinLengthFormValidator | MaxLengthFormValidator | MinFormValidator | MaxFormValidator | PatternFormValidator | EmailFormValidator;

export interface BaseFormValidator {
  validationType: ValidationType;
  messageKey: string;
  messageArgs?: any;
}

export type RequiredFormValidator = BaseFormValidator;

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

export type EmailFormValidator = BaseFormValidator;

// endregion
