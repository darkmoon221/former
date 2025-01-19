/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BaseElement } from '../../model/former.model';

@Component({
  selector: 'lib-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css'],
  standalone: false,
})
export class ValidationErrorComponent {
  @Input() control?: AbstractControl;
  @Input() field?: BaseElement;
  @Input() key?: string;
}
