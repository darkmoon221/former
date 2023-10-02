/*
 * MIT Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'former demo';

  readonly translateService = inject(TranslateService);

  activeItem: MenuItem | undefined;
  items: MenuItem[] = [
    {
      label: 'All elements example',
      routerLink: 'all'
    },
    {
      label: 'Validation example',
      routerLink: 'validation'
    },
    {
      label: 'Layout example',
      routerLink: 'layout'
    }
  ];

  constructor() {
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }


}
