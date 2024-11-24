/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import { InputGroupElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-input-group-element',
  templateUrl: './input-group-element.component.html',
  styleUrls: ['./input-group-element.component.css'],
})
export class InputGroupElementComponent extends BaseElementComponent<InputGroupElement> {}
