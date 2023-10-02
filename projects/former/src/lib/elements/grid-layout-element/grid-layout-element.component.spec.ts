import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import {GridLayoutElementComponent} from './grid-layout-element.component';

describe('GridRowElementComponent', () => {
  let component: GridLayoutElementComponent;
  let fixture: ComponentFixture<GridLayoutElementComponent>;

  let formGroup = new FormGroup({});

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GridLayoutElementComponent]
    });
    fixture = TestBed.createComponent(GridLayoutElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'row',
      value: {
        type: ElementType.GridLayoutElement,
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
