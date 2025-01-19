/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import { CheckboxElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-checkbox-element',
  templateUrl: './checkbox-element.component.html',
  styleUrls: ['./checkbox-element.component.css'],
  standalone: false,
})
export class CheckboxElementComponent extends BaseElementComponent<CheckboxElement> {}
