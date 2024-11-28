/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { KeyValue } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, ContentChildren, EventEmitter, inject, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TemplateNameDirective } from '../directive/template-name.directive';
import { FormerService } from '../former.service';
import { ActionType } from '../model/former.enum';
import { ActionButton, ActionResult, FormDefinition } from '../model/former.model';

@Component({
  selector: 'lib-generated-form',
  templateUrl: './generated-form.component.html',
  styleUrls: ['./generated-form.component.css'],
})
export class GeneratedFormComponent implements OnInit, OnChanges, AfterContentChecked {
  readonly formerService = inject(FormerService);
  readonly cdr = inject(ChangeDetectorRef);

  @ContentChildren(TemplateNameDirective)
  templates!: QueryList<TemplateNameDirective>;

  @Input() formDefinition!: FormDefinition;

  @Input() formValues!: any;

  form!: FormGroup;

  @Output() changesEvent = new EventEmitter<any>();
  @Output() submitEvent = new EventEmitter<ActionResult>();

  actionHandler?: ActionButton;

  ngOnInit(): void {
    this.form = this.formerService.generateForm(this.formDefinition);
    this.form.valueChanges.subscribe(data => this.changesEvent.emit(data));
    this.form.patchValue(this.formValues);

    this.form.valueChanges.subscribe(() => this.updateButtonState());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form && changes['formValues']) {
      this.form.patchValue(this.formValues, { emitEvent: false });
    }
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  // Preserve original property order
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  };

  setActionHandler(action: ActionButton) {
    this.actionHandler = action;
  }

  callActionHandler() {
    if (this.actionHandler) {
      this.submitEvent.emit({
        action: this.actionHandler,
        payload: this.form.value,
      });
    }
  }

  public isButtonDisabled(action: KeyValue<string, ActionButton>) {
    return action.value.disabled;
  }

  findActionForKey(action: KeyValue<string, ActionButton>): ActionButton | undefined {
    return this.formDefinition.actions[action.key ?? ''];
  }

  findSubmitAction(): ActionButton | undefined {
    return Object.values(this.formDefinition.actions).find(action => action.type === ActionType.Submit);
  }

  private updateButtonState() {
    if (this.findSubmitAction()) {
      if (this.form.invalid) {
        this.findSubmitAction()!.disabled = true;
      } else {
        this.findSubmitAction()!.disabled = false;
      }
    }
  }

  public reset() {
    this.form.reset();
  }
}
