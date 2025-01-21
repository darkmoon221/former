/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import { AfterContentChecked, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ElementType, Elements, FormDefinition } from 'former';

@Component({
  selector: 'app-layout-example',
  templateUrl: './layout-example.component.html',
  styleUrls: ['./layout-example.component.scss'],
  standalone: false,
})
export class LayoutExampleComponent implements AfterContentChecked {
  readonly cdr = inject(ChangeDetectorRef);

  formValues: any;

  nestedGrid: Elements = {
    nestedGrid: {
      type: ElementType.GridLayoutElement,
      class: 'flex flex-row',
      elements: {
        left: {
          type: ElementType.GridColumnElement,
          class: 'basis-1/2 bg-orange',
          elements: {
            text_3_2_1: {
              type: ElementType.TextElement,
              title: 'Text 3_2_1',
              cssClass: 'w-full',
              wrapperClass: 'mt-6',
              floatLabel: 'on',
            },
          },
        },
        right: {
          type: ElementType.GridColumnElement,
          class: 'basis-1/2 bg-gray',
          elements: {
            text_3_2_2: {
              type: ElementType.TextElement,
              title: 'Text 3_2_2',
              cssClass: 'w-full',
              wrapperClass: 'mt-6',
              floatLabel: 'on',
            },
          },
        },
      },
    },
  };

  formDefinition: FormDefinition = {
    title: 'Layout example',
    elements: {
      rowOne: {
        type: ElementType.GridLayoutElement,
        class: 'flex flex-row',
        elements: {
          col_1_1: {
            type: ElementType.GridColumnElement,
            class: 'basis-1/2 bg-blue',
            elements: {
              text_1_1: {
                type: ElementType.TextElement,
                title: 'Text 1_1',
                cssClass: 'w-full',
                wrapperClass: 'mt-6',
                floatLabel: 'on',
              },
            },
          },
          col_1_2: {
            type: ElementType.GridColumnElement,
            class: 'basis-1/2 bg-red',
            elements: {
              text_1_2: {
                type: ElementType.TextElement,
                title: 'Text 1_2',
                cssClass: 'w-full',
                wrapperClass: 'mt-6',
                floatLabel: 'on',
              },
            },
          },
        },
      },
      rowTwo: {
        type: ElementType.GridLayoutElement,
        class: 'flex flex-row',
        elements: {
          col_2_1: {
            type: ElementType.GridColumnElement,
            class: 'basis-full bg-green',
            elements: {
              text_2_1: {
                type: ElementType.TextElement,
                title: 'Text 2_1',
                cssClass: 'w-full',
                wrapperClass: 'mt-6',
                floatLabel: 'on',
              },
            },
          },
        },
      },
      rowThree: {
        type: ElementType.GridLayoutElement,
        class: 'flex flex-row',
        elements: {
          col_3_1: {
            type: ElementType.GridColumnElement,
            class: 'basis-1/2 bg-yellow',
            elements: {
              text_3_1_1: {
                type: ElementType.TextElement,
                title: 'Text 3_1_1',
                cssClass: 'w-full',
                wrapperClass: 'mt-6',
                floatLabel: 'on',
              },
              text_3_1_2: {
                type: ElementType.TextElement,
                title: 'Text 3_1_2',
                cssClass: 'w-full',
                wrapperClass: 'mt-6',
                floatLabel: 'on',
              },
            },
          },
          col_3_2: {
            type: ElementType.GridColumnElement,
            class: 'basis-1/2 bg-pink',
            elements: this.nestedGrid,
          },
        },
      },
    },
    actions: {},
  };

  formChanged($event: any) {
    this.formValues = $event;
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
