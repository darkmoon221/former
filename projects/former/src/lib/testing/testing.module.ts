/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessageModule} from 'primeng/message';
import {ValidationErrorComponent} from '../elements/validation-error/validation-error.component';
import {FormerService} from '../former.service';
import {TemplateNameDirective} from "../directive/template-name.directive";


const primeng = [
  CardModule,
  InputTextModule,
  CalendarModule,
  DropdownModule,
  MessageModule,
  KeyFilterModule,
  AutoCompleteModule,
  CheckboxModule,
  ButtonModule,
  InputNumberModule,
  InputTextareaModule
];

@NgModule({
  declarations: [ValidationErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, ...primeng],
  exports: [CommonModule, ReactiveFormsModule, ...primeng, ValidationErrorComponent],
  providers: [

  ]
})
export class TestingModule {

}
