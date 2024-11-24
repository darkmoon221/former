import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../../testing/testing.module';

import { ValidationErrorComponent } from './validation-error.component';

describe('ValidationErrorComponent', () => {
  let component: ValidationErrorComponent;
  let fixture: ComponentFixture<ValidationErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ValidationErrorComponent],
    });
    fixture = TestBed.createComponent(ValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
