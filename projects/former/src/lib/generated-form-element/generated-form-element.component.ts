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
import {CardElement, Element, GridColumnElement, GridLayoutElement, GroupElement, LayoutElement} from '../model/former.model';
import {BaseElementComponent} from "../elements/base-element.component";

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

@Component({
  selector: '[lib-grid-layout-element]',
  templateUrl: '../elements/grid-layout-element/grid-layout-element.component.html',
  styleUrls: ['../elements/grid-layout-element/grid-layout-element.component.css'],
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

@Component({
  selector: '[lib-grid-column-element]',
  templateUrl: '../elements/grid-column-element/grid-column-element.component.html',
  styleUrls: ['../elements/grid-column-element/grid-column-element.component.css']
})
export class GridColumnElementComponent extends BaseElementComponent<GridColumnElement>{
  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }
}

@Component({
  selector: 'lib-group-element',
  templateUrl: '../elements/group-element/group-element.component.html',
  styleUrls: ['../elements/group-element/group-element.component.css']
})
export class GroupElementComponent extends BaseElementComponent<GroupElement> {

  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }

  get childGroup() {
    return this.formGroup.get(this.key) as FormGroup
  }

}

@Component({
  selector: 'lib-card-element',
  templateUrl: '../elements/card-element/card-element.component.html',
  styleUrls: ['../elements/card-element/card-element.component.css']
})
export class CardElementComponent extends BaseElementComponent<CardElement> {

  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  };

}
