import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ElementType } from '../../model/former.enum';
import { TestingModule } from '../../testing/testing.module';
import { CardElementComponent } from '../../generated-form-element/generated-form-element.component';

describe('CardElementComponent', () => {
  let component: CardElementComponent;
  let fixture: ComponentFixture<CardElementComponent>;

  const formGroup = new FormGroup({});

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CardElementComponent],
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
        elements: {},
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
