/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TabMenuModule } from 'primeng/tabmenu';
import { AllElementsExampleComponent } from './all-elements-example/all-elements-example.component';

import { AppComponent } from './app.component';
import { LayoutExampleComponent } from './layout-example/layout-example.component';
import { ValidationExampleComponent } from './validation-example/validation-example.component';
import { ActionExampleComponent } from './action-example/action-example.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import Aura from '@primeng/themes/aura';

import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { definePreset } from '@primeng/themes';
import { FormerModule } from 'former';
import { AutocompleteExampleComponent } from './elements/autocomplete-example/autocomplete-example.component';
import { IntermediateExampleComponent } from './elements/intermediate-example/intermediate-example.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  {
    path: 'all',
    component: AllElementsExampleComponent,
    children: [
      {
        path: '',
        redirectTo: 'autocomplete',
        pathMatch: 'full',
      },
      {
        path: 'autocomplete',
        component: AutocompleteExampleComponent,
        pathMatch: 'full',
      },
      {
        path: 'intermediate',
        component: IntermediateExampleComponent,
        pathMatch: 'full',
      },
    ],
    // component: AllElementsExampleComponent,
  },
  {
    path: 'validation',
    component: ValidationExampleComponent,
  },
  {
    path: 'layout',
    component: LayoutExampleComponent,
  },
  {
    path: 'actions',
    component: ActionExampleComponent,
  },
  {
    path: 'templates',
    component: TemplateExampleComponent,
  },
];

const MyPreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
});

@NgModule({
  declarations: [AppComponent, ValidationExampleComponent, AllElementsExampleComponent, LayoutExampleComponent, ActionExampleComponent, TestComponentComponent, TemplateExampleComponent, AutocompleteExampleComponent, IntermediateExampleComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(appRoutes),
    TabMenuModule,
    FormerModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: { darkModeSelector: true },
      },
    }),
  ],
})
export class AppModule {}
