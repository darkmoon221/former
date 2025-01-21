/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { ValidationErrorComponent } from '../elements/validation-error/validation-error.component';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { provideHttpClient } from '@angular/common/http';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

const primeng = [
  CardModule,
  InputTextModule,
  DatePickerModule,
  SelectModule,
  MessageModule,
  KeyFilterModule,
  AutoCompleteModule,
  CheckboxModule,
  ButtonModule,
  InputNumberModule,
  TextareaModule,
  FloatLabelModule,
  InputGroupAddonModule,
  InputGroupModule,
];

@NgModule({
  declarations: [ValidationErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, ...primeng],
  exports: [CommonModule, ReactiveFormsModule, ...primeng, ValidationErrorComponent],
  providers: [provideHttpClient()],
})
export class TestingModule {}
