import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementType} from '../../model/former.model';
import {TestingModule} from '../../testing/testing.module';

import {GroupElementComponent} from './group-element.component';

describe('GroupElementComponent', () => {
  let component: GroupElementComponent;
  let fixture: ComponentFixture<GroupElementComponent>;

  let formGroup = new FormGroup({});
  formGroup.addControl("group", new FormGroup({}))

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GroupElementComponent]
    });
    fixture = TestBed.createComponent(GroupElementComponent);
    component = fixture.componentInstance;
    component.parentKey = 'parentKey';
    component.formGroup = formGroup;
    component.element = {
      key: 'group',
      value: {
        type: ElementType.GroupElement,
        title: 'Group',
        elements: {}
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
