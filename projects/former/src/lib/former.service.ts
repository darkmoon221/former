/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {inject, Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ElementType, ValidationType} from './model/former.enum';
import {BaseElement, Element, Elements, FormDefinition, MaxFormValidator, MaxLengthFormValidator, MinFormValidator, MinLengthFormValidator, PatternFormValidator} from './model/former.model';

@Injectable({
  providedIn: 'root'
})
export class FormerService {

  readonly fb = inject(FormBuilder);

  generateForm(formDefinition: FormDefinition): FormGroup {
    const formGroup = this.fb.group({});

    this.addControlRecursive(formGroup, formDefinition.elements);

    return formGroup;
  }

  addControlRecursive(formGroup: FormGroup, elements: Elements) {
    for (let key of Object.keys(elements)) {
      const element: Element = elements[key];
      switch (element.type) {
        case ElementType.GroupElement:
          const nestedGroup = this.fb.group({});
          this.addControlRecursive(nestedGroup, element.elements);
          formGroup.addControl(key, nestedGroup);
          break;
        case ElementType.GridColumnElement:
        case ElementType.GridLayoutElement:
        case ElementType.CardElement:
          this.addControlRecursive(formGroup, element.elements);
          break;
        case ElementType.TemplateElement:
          break;
        default:
          formGroup.addControl(key, new FormControl(undefined, this.addValidators(element)));
      }
    }
  }

  addValidators(element: BaseElement): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (element.validators) {
      for (let validator of element.validators) {
        switch (validator.validationType) {
          case ValidationType.Min:
            validators.push(Validators.max((validator as MinFormValidator).min))
            break;
          case ValidationType.Max:
            validators.push(Validators.max((validator as MaxFormValidator).max))
            break;
          case ValidationType.Required:
            validators.push(Validators.required);
            break;
          case ValidationType.Email:
            validators.push(Validators.email);
            break;
          case ValidationType.MinLength:
            validators.push(Validators.minLength((validator as MinLengthFormValidator).minLength));
            break;
          case ValidationType.MaxLength:
            validators.push(Validators.maxLength((validator as MaxLengthFormValidator).maxLength));
            break;
          case ValidationType.Pattern:
            validators.push(Validators.pattern((validator as PatternFormValidator).pattern));
            break;
          default:
            break;
        }
      }
    }

    return validators;
  }

}
