/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component, Input, OnChanges, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { TemplateNameDirective } from '../../directive/template-name.directive';
import { TemplateElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-template-element',
  templateUrl: './template-element.component.html',
  styleUrls: ['./template-element.component.css'],
  standalone: false,
})
export class TemplateElementComponent extends BaseElementComponent<TemplateElement> implements OnChanges {
  @Input() templates?: QueryList<TemplateNameDirective>;

  template?: TemplateRef<any>;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (this.templates) {
      this.template = this.templates.find(template => template.name === this.field.templateId)?.template;
    }
  }
}
