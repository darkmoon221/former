/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GroupElement} from '../../model/former.model';
import {BaseElementComponent} from '../base-element.component';

@Component({
  selector: 'lib-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.css']
})
export class GroupElementComponent extends BaseElementComponent<GroupElement> {

  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  }

  get childGroup() {
    return this.formGroup.get(this.key) as FormGroup
  }

}
