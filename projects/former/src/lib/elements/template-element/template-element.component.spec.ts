import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateElementComponent } from './template-element.component';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestingModule } from '../../testing/testing.module';
import { ElementType } from '../../model/former.enum';
import { TemplateNameDirective } from '../../directive/template-name.directive';

@Component({
  template: `
    <ng-template name="one">Hello World</ng-template>
    <ng-template name="two">Hello Test</ng-template>
  `,
})
class WrapperComponent {
  @ViewChildren(TemplateNameDirective)
  templates?: QueryList<TemplateNameDirective>;
}

describe('TemplateElementComponent', () => {
  let wrapperInstance: WrapperComponent;

  let component: TemplateElementComponent;
  let fixture: ComponentFixture<TemplateElementComponent>;

  const formGroup = new FormGroup({});
  formGroup.addControl('template', new FormControl(''));

  const templateId = 'one';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [TemplateElementComponent, TemplateNameDirective, WrapperComponent],
    });

    const wrapperComponent = TestBed.createComponent(WrapperComponent);
    wrapperComponent.detectChanges();
    wrapperInstance = wrapperComponent.componentInstance;

    fixture = TestBed.createComponent(TemplateElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'template',
      value: {
        type: ElementType.TemplateElement,
        templateId: templateId,
      },
    };
    component.templates = wrapperInstance.templates;
    fixture.componentInstance.ngOnChanges({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.templates?.length).toBe(2);

    const expected = component.templates?.find(template => template.name === templateId)?.template;
    expect(component.template).toBe(expected);
  });
});
