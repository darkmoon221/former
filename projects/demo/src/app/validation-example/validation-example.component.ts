/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { AfterContentChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ElementType, FormDefinition, ValidationType } from 'former';

@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.scss'],
})
export class ValidationExampleComponent implements AfterContentChecked {
  readonly cdr = inject(ChangeDetectorRef);
  formValues: any;

  formDefinition: FormDefinition = {
    elements: {
      text: {
        type: ElementType.TextElement,
        title: 'TextElement',
        validators: [
          {
            validationType: ValidationType.Required,
            messageKey: 'VALIDATION.TEXT.REQUIRED',
          },
        ],
      },
      email: {
        type: ElementType.TextElement,
        title: 'TextElement with Email Constraint',
        validators: [
          {
            validationType: ValidationType.Required,
            messageKey: 'VALIDATION.EMAIL.REQUIRED',
          },
          {
            validationType: ValidationType.Email,
            messageKey: 'VALIDATION.EMAIL.EMAIL',
          },
        ],
      },
      name: {
        type: ElementType.TextElement,
        title: 'TextElement with required, pattern and minLength',
        validators: [
          {
            validationType: ValidationType.Required,
            messageKey: 'VALIDATION.NAME.REQUIRED',
          },
          {
            validationType: ValidationType.Pattern,
            messageKey: 'VALIDATION.NAME.PATTERN',
            pattern: '[A-Za-z]+@[A-Za-z]+[.][A-Za-z]+',
            messageArgs: { pattern: '[A-Za-z]+@[A-Za-z]+[.][A-Za-z]+' },
          },
          {
            validationType: ValidationType.MinLength,
            messageKey: 'VALIDATION.NAME.MIN_LENGTH',
            messageArgs: { minLength: 2 },
            minLength: 2,
          },
        ],
      },
    },
    actions: {},
  };

  formChanged($event: any) {
    this.formValues = $event;
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
