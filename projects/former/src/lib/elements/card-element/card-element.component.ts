/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import {Component} from '@angular/core';
import {CardElement} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';

@Component({
  selector: 'lib-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css']
})
export class CardElementComponent extends BaseElementComponent<CardElement> {

  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  };

}
