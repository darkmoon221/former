import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExampleComponent } from './template-example.component';
import { TestingModule } from '../testing.module';

describe('TemplateExampleComponent', () => {
  let component: TemplateExampleComponent;
  let fixture: ComponentFixture<TemplateExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [TemplateExampleComponent],
    });
    fixture = TestBed.createComponent(TemplateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
