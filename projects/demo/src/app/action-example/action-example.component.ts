/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {AfterContentChecked, ChangeDetectorRef, Component, inject, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ActionResult, ActionType, Align, ElementType, FormDefinition, GeneratedFormComponent, ValidationType} from 'former';

@Component({
  selector: 'app-action-example',
  templateUrl: './action-example.component.html',
  styleUrls: ['./action-example.component.scss']
})
export class ActionExampleComponent implements AfterContentChecked
{
  readonly cdr = inject(ChangeDetectorRef);
  readonly router = inject(Router);

  @ViewChild('genForm') form?: GeneratedFormComponent;

  formValues: any;



  formDefinition: FormDefinition = {
    elements: {
      text: {
        type: ElementType.TextElement,
        title: "TextElement",
        validators: [
          {
            validationType: ValidationType.Required,
            messageKey: "VALIDATION.TEXT.REQUIRED"
          }
        ]
      },
      email: {
        type: ElementType.TextElement,
        title: "TextElement with Email Constraint",
        validators: [
          {
            validationType: ValidationType.Required,
            messageKey: "VALIDATION.EMAIL.REQUIRED"
          },
          {
            validationType: ValidationType.Email,
            messageKey: "VALIDATION.EMAIL.EMAIL"
          }
        ]
      },
      name: {
        type: ElementType.TextElement,
        title: 'TextElement with required, pattern and minLength',
        validators: [
          {
            validationType: ValidationType.Required,
            messageKey: 'VALIDATION.NAME.REQUIRED'
          },
          {
            validationType: ValidationType.Pattern,
            messageKey: 'VALIDATION.NAME.PATTERN',
            pattern: '[A-Za-z]+@[A-Za-z]+[.][A-Za-z]+',
            messageArgs: {pattern: '[A-Za-z]+@[A-Za-z]+[.][A-Za-z]+'}
          },
          {
            validationType: ValidationType.MinLength,
            messageKey: 'VALIDATION.NAME.MIN_LENGTH',
            messageArgs: { minLength: 2 },
            minLength: 2,
          }
        ]
      },
    },
    actions: {
      submit: {
        type: ActionType.Submit,
        align: Align.right,
        label: 'Submit form',
        disabled: false
      },
      cancel: {
        type: ActionType.CancelButton,
        align: Align.left,
        label: 'Cancel'
      },
      reset: {
        type: ActionType.Button,
        align: Align.left,
        label: 'Reset'
      }
    }
  };

  formChanged($event: any) {
    this.formValues = $event;
    console.debug('Form changed', this.formValues);
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  formSubmitted(actionResult: ActionResult) {
    switch (actionResult.action.type) {
      case ActionType.Submit:
        console.log("Submitted values", actionResult.payload);
        break;
      case ActionType.Button:
        this.form?.reset();
        console.log("Form resetted");
        break;
      case ActionType.CancelButton:
        this.router.navigate(['all']).then();
        break;
      default:
        break;
    }
  }
}
