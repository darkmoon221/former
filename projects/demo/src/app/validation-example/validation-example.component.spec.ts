import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationExampleComponent } from './validation-example.component';
import { TestingModule } from '../testing.module';

describe('ValidationExampleComponent', () => {
  let component: ValidationExampleComponent;
  let fixture: ComponentFixture<ValidationExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ValidationExampleComponent],
    });
    fixture = TestBed.createComponent(ValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
