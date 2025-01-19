/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import { DropdownElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-dropdown-element',
  templateUrl: './dropdown-element.component.html',
  styleUrls: ['./dropdown-element.component.css'],
  standalone: false,
})
export class DropdownElementComponent extends BaseElementComponent<DropdownElement> {}
