/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { NgModule } from '@angular/core';
import { ValidationErrorComponent } from '../../../former/src/lib/elements/validation-error/validation-error.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { FormerModule } from 'former';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponentComponent } from './test-component/test-component.component';
import { provideHttpClient } from '@angular/common/http';

const primeNg = [TabMenuModule];

@NgModule({
  declarations: [ValidationErrorComponent, TestComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader,
      },
    }),
    FormerModule,
    RouterTestingModule,
    ...primeNg,
  ],
  exports: [CommonModule, ReactiveFormsModule, TranslateModule, FormerModule, RouterTestingModule, ...primeNg, TestComponentComponent],
  providers: [TranslateService, TranslateStore, provideHttpClient()],
})
export class TestingModule {}
