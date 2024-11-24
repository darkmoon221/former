import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionExampleComponent } from './action-example.component';

describe('ActionExampleComponent', () => {
  let component: ActionExampleComponent;
  let fixture: ComponentFixture<ActionExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionExampleComponent],
    });
    fixture = TestBed.createComponent(ActionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
