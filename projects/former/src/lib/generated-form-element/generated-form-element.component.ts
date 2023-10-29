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

  protected readonly ElementType = ElementType;

  @Input() parentKey = '';
  @Input() element!: KeyValue<string, Element>;
  @Input() formGroup!: FormGroup;
  @Input() class!: string;

  get anyElement(): any {
    return this.element as any;
  }

}
