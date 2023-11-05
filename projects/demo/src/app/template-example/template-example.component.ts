/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import {ElementType, FormDefinition} from 'former';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.scss']
})
export class TemplateExampleComponent {


  formDefinition: FormDefinition = {
    title: 'All elements example',
    elements: {
      template: {
        type: ElementType.TemplateElement,
        templateId: "one"
      },
      templateTwo: {
        type: ElementType.TemplateElement,
        templateId: "two"
      },
    },
    actions: {}
  }

}
