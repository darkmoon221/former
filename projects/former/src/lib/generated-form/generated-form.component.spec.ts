import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../testing/testing.module';

import { GeneratedFormComponent } from './generated-form.component';

describe('GeneratedFormComponent', () => {
  let component: GeneratedFormComponent;
  let fixture: ComponentFixture<GeneratedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GeneratedFormComponent],
    });
    fixture = TestBed.createComponent(GeneratedFormComponent);
    component = fixture.componentInstance;
    component.formValues = {};
    component.formDefinition = {
      title: 'form',
      elements: {},
      actions: {},
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
