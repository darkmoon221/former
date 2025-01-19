/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import { TextAreaElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-text-area-element',
  templateUrl: './text-area-element.component.html',
  styleUrls: ['./text-area-element.component.css'],
  standalone: false,
})
export class TextAreaElementComponent extends BaseElementComponent<TextAreaElement> {}
