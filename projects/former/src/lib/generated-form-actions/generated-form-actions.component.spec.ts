import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '../testing/testing.module';

import { GeneratedFormActionsComponent } from './generated-form-actions.component';

describe('GeneratedFormActionsComponent', () => {
  let component: GeneratedFormActionsComponent;
  let fixture: ComponentFixture<GeneratedFormActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [GeneratedFormActionsComponent],
    });
    fixture = TestBed.createComponent(GeneratedFormActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
