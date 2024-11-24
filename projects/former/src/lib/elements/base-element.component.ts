/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DisableElement } from '../model/former.model';

@Component({
  selector: 'lib-base-element-component',
  template: '<div>do not use directly</div>',
})
export abstract class BaseElementComponent<T extends object> implements OnInit {
  @Input() parentKey = '';
  @Input() element!: KeyValue<string, T>;
  @Input() formGroup!: FormGroup;

  get key(): string {
    return this.element.key;
  }

  get field(): T {
    return this.element.value;
  }

  get control(): AbstractControl {
    return this.formGroup.get(this.key) as AbstractControl;
  }

  ngOnInit(): void {
    if (this.control && (this.field as DisableElement)) {
      if ((this.field as DisableElement).disabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }
  }
}
