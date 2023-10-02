/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';
import {AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormerService} from '../former.service';
import {ActionButton, ActionType, FormDefinition} from '../model/former.model';

@Component({
  selector: 'lib-generated-form',
  templateUrl: './generated-form.component.html',
  styleUrls: ['./generated-form.component.css']
})
export class GeneratedFormComponent implements OnInit, OnChanges, AfterContentChecked {

  readonly formerService = inject(FormerService);
  readonly cdr = inject(ChangeDetectorRef);

  @Input() formDefinition!: FormDefinition;

  @Input() formValues!: any;

  form!: FormGroup;

  @Output() onChanges = new EventEmitter<any>();
  @Output() onSubmit = new EventEmitter<any>();

  actionHandler?: ActionButton;

  ngOnInit(): void {
    this.form = this.formerService.generateForm(this.formDefinition);
    this.form.valueChanges.subscribe(data => this.onChanges.emit(data));
    this.form.patchValue(this.formValues);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form && changes['formValues']) {
      this.form.patchValue(this.formValues, {emitEvent: false});
    }
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  // Preserve original property order
  originalOrder = (a: KeyValue<any, any>, b: KeyValue<any, any>): number => {
    return 0;
  };

  setActionHandler(action: ActionButton) {
    this.actionHandler = action;
  }

  callActionHandler() {
    if (this.actionHandler) {
      if (this.actionHandler.type == ActionType.Button) {
        this.onSubmit.emit(this.formValues);
      }
    }
  }
}
