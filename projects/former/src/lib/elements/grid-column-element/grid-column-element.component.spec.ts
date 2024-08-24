import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.enum';
import {TestingModule} from '../../testing/testing.module';
import {GridColumnElementComponent} from "../../generated-form-element/generated-form-element.component";


describe('GridColumnElementComponent', () => {
  let component: GridColumnElementComponent;
  let fixture: ComponentFixture<GridColumnElementComponent>;

  let formGroup = new FormGroup({});

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GridColumnElementComponent]
    });
    fixture = TestBed.createComponent(GridColumnElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'col',
      value: {
        type: ElementType.GridColumnElement,
        class: '',
        elements: {}
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
