/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ElementType} from '../model/former.enum';
import {Element} from '../model/former.model';

@Component({
  selector: '[lib-generated-form-element]',
  templateUrl: './generated-form-element.component.html',
  styleUrls: ['./generated-form-element.component.css']
})
export class GeneratedFormElementComponent {

  protected readonly TextElement = ElementType.TextElement;
  protected readonly TextAreaElement = ElementType.TextAreaElement;
  protected readonly NumberElement = ElementType.NumberElement;
  protected readonly GroupElement = ElementType.GroupElement;
  protected readonly CalendarElement = ElementType.CalendarElement;
  protected readonly DropdownElement = ElementType.DropdownElement;
  protected readonly InputGroupElement = ElementType.InputGroupElement;
  protected readonly  GridLayoutElement = ElementType.GridLayoutElement;
  protected readonly GridColumnElement = ElementType.GridColumnElement;
  protected readonly AutocompleteElement = ElementType.AutocompleteElement;
  protected readonly CheckboxElement = ElementType.CheckboxElement;
  protected readonly CardElement = ElementType.CardElement;

  @Input() parentKey = '';
  @Input() element!: KeyValue<string, Element>;
  @Input() formGroup!: FormGroup;
  @Input() class!: string;

  get anyElement(): any {
    return this.element as any;
  }

}
