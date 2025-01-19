import { Component } from '@angular/core';
import { DisplayTextElement } from '../../model/former.model';
import { BaseElementComponent } from '../base-element.component';

@Component({
  selector: 'lib-display-text-element',
  templateUrl: './display-text-element.component.html',
  styleUrls: ['./display-text-element.component.css'],
  standalone: false,
})
export class DisplayTextElementComponent extends BaseElementComponent<DisplayTextElement> {}
