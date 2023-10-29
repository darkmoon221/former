/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import {Component} from '@angular/core';
import {ElementType} from '../../model/former.enum';
import {GridLayoutElement, LayoutElement} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';

@Component({
  selector: '[lib-grid-layout-element]',
  templateUrl: './grid-layout-element.component.html',
  styleUrls: ['./grid-layout-element.component.css'],
})
export class GridLayoutElementComponent extends BaseElementComponent<GridLayoutElement> {

  getElementClass(element: any) {
    if ((element.value as any).type === ElementType.GridColumnElement) {
      return (element.value as any as LayoutElement).class + ' col-no-padding';
    } else {
      return '';
    }
  }

  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  };
}
