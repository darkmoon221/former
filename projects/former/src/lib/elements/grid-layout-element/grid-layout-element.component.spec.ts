import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ElementType } from '../../model/former.enum';
import { TestingModule } from '../../testing/testing.module';
import { GridLayoutElementComponent } from '../../generated-form-element/generated-form-element.component';

describe('GridRowElementComponent', () => {
  let component: GridLayoutElementComponent;
  let fixture: ComponentFixture<GridLayoutElementComponent>;

  const formGroup = new FormGroup({});

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GridLayoutElementComponent],
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
        elements: {},
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
