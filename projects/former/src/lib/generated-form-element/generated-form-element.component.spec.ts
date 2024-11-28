import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { TextElementComponent } from '../elements/text-element/text-element.component';
import { FormerService } from '../former.service';
import { TestingModule } from '../testing/testing.module';

import { GeneratedFormElementComponent } from './generated-form-element.component';
import { ElementType } from '../model/former.enum';

describe('GeneratedFormElementComponent', () => {
  let component: GeneratedFormElementComponent;
  let fixture: ComponentFixture<GeneratedFormElementComponent>;

  const formGroup = new FormGroup({});
  formGroup.addControl('text', new FormControl(''));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GeneratedFormElementComponent, TextElementComponent],
      providers: [{ provide: FormerService, useValue: FormerService }],
    });
    fixture = TestBed.createComponent(GeneratedFormElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'text',
      value: {
        type: ElementType.TextElement,
        title: 'Text',
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
