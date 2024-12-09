/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { CalendarElementComponent } from './elements/calendar-element/calendar-element.component';
import { DropdownElementComponent } from './elements/dropdown-element/dropdown-element.component';
import { InputGroupElementComponent } from './elements/input-group-element/input-group-element.component';
import { TextElementComponent } from './elements/text-element/text-element.component';
import { CardElementComponent, GeneratedFormElementComponent, GridColumnElementComponent, GridLayoutElementComponent, GroupElementComponent } from './generated-form-element/generated-form-element.component';
import { GeneratedFormComponent } from './generated-form/generated-form.component';
import { AutocompleteElementComponent } from './elements/autocomplete-element/autocomplete-element.component';
import { CheckboxElementComponent } from './elements/checkbox-element/checkbox-element.component';
import { GeneratedFormActionsComponent } from './generated-form-actions/generated-form-actions.component';
import { ValidationErrorComponent } from './elements/validation-error/validation-error.component';
import { NumberElementComponent } from './elements/number-element/number-element.component';
import { TextAreaElementComponent } from './elements/text-area-element/text-area-element.component';
import { DisplayTextElementComponent } from './elements/display-text-element/display-text-element.component';
import { TemplateElementComponent } from './elements/template-element/template-element.component';
import { TemplateNameDirective } from './directive/template-name.directive';
import { InputTextareaModule } from 'primeng/inputtextarea';

const primeng = [CardModule, InputTextModule, CalendarModule, DropdownModule, MessageModule, KeyFilterModule, AutoCompleteModule, CheckboxModule, ButtonModule, InputNumberModule, InputTextareaModule];

@NgModule({
  declarations: [
    GeneratedFormComponent,
    GeneratedFormElementComponent,
    TextElementComponent,
    GroupElementComponent,
    CalendarElementComponent,
    DropdownElementComponent,
    InputGroupElementComponent,
    GridLayoutElementComponent,
    GridColumnElementComponent,
    AutocompleteElementComponent,
    CheckboxElementComponent,
    GeneratedFormActionsComponent,
    ValidationErrorComponent,
    CardElementComponent,
    NumberElementComponent,
    TextAreaElementComponent,
    DisplayTextElementComponent,
    TemplateElementComponent,
    TemplateNameDirective,
  ],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, ...primeng],
  exports: [GeneratedFormComponent, GeneratedFormActionsComponent, TemplateNameDirective, ...primeng],
})
export class FormerModule {}
