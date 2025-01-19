/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import { TextElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css'],
  standalone: false,
})
export class TextElementComponent extends BaseElementComponent<TextElement> {}
