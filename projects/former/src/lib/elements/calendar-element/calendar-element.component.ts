/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { Component } from '@angular/core';
import { CalendarElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-calendar-element',
  templateUrl: './calendar-element.component.html',
  styleUrls: ['./calendar-element.component.css'],
})
export class CalendarElementComponent extends BaseElementComponent<CalendarElement> {}
