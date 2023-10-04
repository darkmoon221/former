/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import FormerUtils from '../former.utils';
import {GeneratedFormComponent} from '../generated-form/generated-form.component';
import {ActionButton, Align} from '../model/former.model';

@Component({
  selector: 'lib-generated-form-actions',
  templateUrl: './generated-form-actions.component.html',
  styleUrls: ['./generated-form-actions.component.css']
})
export class GeneratedFormActionsComponent implements OnInit, OnChanges {

  @Input() form?: GeneratedFormComponent;

  leftActions: KeyValue<string, ActionButton>[] = [];
  rightActions: KeyValue<string, ActionButton>[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form && this.form.formDefinition && this.form.formDefinition.actions && changes['form']) {
      this.initActions();
    }
  }

  onButtonClick(action: ActionButton) {
    const form = this.form;
    if (form) {
      form.setActionHandler(action);
      form.callActionHandler();
    }
  }

  isButtonDisabled(action: KeyValue<string, ActionButton>) {
    return this.form?.isButtonDisabled(action);
  }

  ngOnInit(): void {
    this.initActions();
  }

  initActions() {
    if (this.form && this.form.formDefinition && this.form.formDefinition.actions) {
      this.leftActions = FormerUtils.asKeyValueArray(this.form?.formDefinition.actions).filter(action => action.value.align === Align.left);
      this.rightActions = FormerUtils.asKeyValueArray(this.form?.formDefinition.actions).filter(action => action.value.align !== Align.left);
    }
  }
}
