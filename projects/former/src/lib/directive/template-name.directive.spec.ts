import { TemplateNameDirective } from './template-name.directive';
import { Component, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: ` <ng-template name="one">Hello World</ng-template> `,
})
class WrapperComponent {
  @ViewChild(NgTemplateOutlet) template?: NgTemplateOutlet;
}

describe('TemplateNameDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;

  it('should create an instance', () => {
    fixture = TestBed.createComponent(WrapperComponent);
    const wrapperComponent = fixture.debugElement.componentInstance;
    const directive = new TemplateNameDirective(wrapperComponent.template);
    expect(directive).toBeTruthy();
  });
});
