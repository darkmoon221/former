import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import { CardElementComponent } from './card-element.component';

describe('CardElementComponent', () => {
  let component: CardElementComponent;
  let fixture: ComponentFixture<CardElementComponent>;

  let formGroup = new FormGroup({});

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CardElementComponent]
    });
    fixture = TestBed.createComponent(CardElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'row',
      value: {
        type: ElementType.CardElement,
        title: 'Card',
        elements: {}
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
