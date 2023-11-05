/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormerModule} from 'former';
import {TabMenuModule} from 'primeng/tabmenu';
import {AllElementsExampleComponent} from './all-elements-example/all-elements-example.component';

import {AppComponent} from './app.component';
import {LayoutExampleComponent} from './layout-example/layout-example.component';
import {ValidationExampleComponent} from './validation-example/validation-example.component';
import { ActionExampleComponent } from './action-example/action-example.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TemplateExampleComponent } from './template-example/template-example.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  {
    path: 'all',
    component: AllElementsExampleComponent,
  },
  {
    path: 'validation',
    component: ValidationExampleComponent
  },
  {
    path: 'layout',
    component: LayoutExampleComponent
  },
  {
    path: 'actions',
    component: ActionExampleComponent
  },
  {
    path: 'templates',
    component: TemplateExampleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ValidationExampleComponent,
    AllElementsExampleComponent,
    LayoutExampleComponent,
    ActionExampleComponent,
    TestComponentComponent,
    TemplateExampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'de',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }
    ),
    RouterModule.forRoot(appRoutes),
    TabMenuModule,
    FormerModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
