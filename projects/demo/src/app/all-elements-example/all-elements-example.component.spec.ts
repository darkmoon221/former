import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllElementsExampleComponent } from './all-elements-example.component';

describe('AllElementsExampleComponent', () => {
  let component: AllElementsExampleComponent;
  let fixture: ComponentFixture<AllElementsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllElementsExampleComponent],
    });
    fixture = TestBed.createComponent(AllElementsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
