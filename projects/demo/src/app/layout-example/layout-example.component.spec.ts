import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExampleComponent } from './layout-example.component';

describe('LayoutExampleComponent', () => {
  let component: LayoutExampleComponent;
  let fixture: ComponentFixture<LayoutExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutExampleComponent],
    });
    fixture = TestBed.createComponent(LayoutExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
