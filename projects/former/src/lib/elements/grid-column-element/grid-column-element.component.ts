/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import { Component } from '@angular/core';
import {GridColumnElement} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';

@Component({
  selector: '[lib-grid-column-element]',
  templateUrl: './grid-column-element.component.html',
  styleUrls: ['./grid-column-element.component.css']
})
export class GridColumnElementComponent extends BaseElementComponent<GridColumnElement>{
  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }
}
