import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateExampleComponent } from './intermediate-example.component';
import { TestingModule } from '../../testing.module';

describe('IntermediateExampleComponent', () => {
  let component: IntermediateExampleComponent;
  let fixture: ComponentFixture<IntermediateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [IntermediateExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntermediateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
