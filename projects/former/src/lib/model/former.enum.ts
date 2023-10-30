/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
export const enum ElementType {
  TextElement = 'text',
  DisplayTextElement = 'display-text',
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

export const enum NumberMode {
  Decimal = 'decimal',
  Currency = 'currency'
}

export const enum ActionType {
  Button = 'button',
  Submit = 'submit',
  CancelButton = 'cancel-button'
}

export const enum Align {
  left = 'left',
  right = 'right',
  center = 'center'
}

export const enum ValidationType {
  Min = 'min',
  Max = 'max',
  Required = 'required',
  Email = 'email',
  MinLength = 'minlength',
  MaxLength = 'maxlength',
  Pattern = 'pattern'
}
