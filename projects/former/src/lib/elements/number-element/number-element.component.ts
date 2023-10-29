/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {Component, OnInit} from '@angular/core';
import {NumberElement} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';
import { NumberMode } from '../../model/former.enum';


@Component({
  selector: 'lib-number-element',
  templateUrl: './number-element.component.html',
  styleUrls: ['./number-element.component.css']
})
export class NumberElementComponent extends BaseElementComponent<NumberElement> implements OnInit {

  get mode() {
    if (this.field && this.field.mode) {
      return this.field.mode;
    } else {
      return NumberMode.Decimal;
    }
  }

  get currency() {
    if (this.field && this.field.currency) {
      return this.field.currency;
    } else {
      return 'EUR';
    }
  }

}
