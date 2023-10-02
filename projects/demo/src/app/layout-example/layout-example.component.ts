/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {AfterContentChecked, ChangeDetectorRef, Component, inject} from '@angular/core';
import {Elements, ElementType, FormDefinition} from '../../../../former/src/lib/model/former.model';

@Component({
  selector: 'app-layout-example',
  templateUrl: './layout-example.component.html',
  styleUrls: ['./layout-example.component.scss']
})
export class LayoutExampleComponent implements AfterContentChecked{

  readonly cdr = inject(ChangeDetectorRef);

  formValues: any;

  nestedGrid: Elements = {
    nestedGrid: {
      type: ElementType.GridLayoutElement,
      class: 'grid ',
      elements: {
        left: {
          type: ElementType.GridColumnElement,
          class: 'col bg-orange-100',
          elements: {
            text_3_2_1: {
              type: ElementType.TextElement,
              title: 'Text 3_2_1',
            }
          }
        },
        right: {
          type: ElementType.GridColumnElement,
          class: 'col bg-gray-100',
          elements: {
            text_3_2_2: {
              type: ElementType.TextElement,
              title: 'Text 3_2_2',
            }
          }
        }
      }
    }
  };

  formDefinition: FormDefinition = {
    title: 'Layout example',
    elements: {
      rowOne: {
        type: ElementType.GridLayoutElement,
        class: 'grid',
        elements: {
          col_1_1: {
            type: ElementType.GridColumnElement,
            class: 'col bg-blue-100',
            elements: {
              text_1_1: {
                type: ElementType.TextElement,
                title: 'Text 1_1'
              },
            }
          },
          col_1_2: {
            type: ElementType.GridColumnElement,
            class: 'col bg-red-100',
            elements: {
              text_1_2: {
                type: ElementType.TextElement,
                title: 'Text 1_2'
              },
            }
          }
        }
      },
      rowTwo: {
        type: ElementType.GridLayoutElement,
        class: 'grid',
        elements: {
          col_2_1: {
            type: ElementType.GridColumnElement,
            class: 'col bg-green-100',
            elements: {
              text_2_1: {
                type: ElementType.TextElement,
                title: 'Text 2_1'
              },
            }
          }
        }
      },
      rowThree: {
        type: ElementType.GridLayoutElement,
        class: 'grid',
        elements: {
          col_3_1: {
            type: ElementType.GridColumnElement,
            class: 'col bg-yellow-100',
            elements: {
              text_3_1_1: {
                type: ElementType.TextElement,
                title: 'Text 3_1_1'
              },
              text_3_1_2: {
                type: ElementType.TextElement,
                title: 'Text 3_1_2'
              },
            }
          },
          col_3_2: {
            type: ElementType.GridColumnElement,
            class: 'col bg-pink-100',
            elements: this.nestedGrid
          }
        }
      }
    },
    actions: {
    }
  }

  formChanged($event: any) {
    this.formValues = $event;
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
