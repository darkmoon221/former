import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExampleComponent } from './autocomplete-example.component';
import { TestingModule } from '../../testing.module';

describe('AutocompleteExampleComponent', () => {
  let component: AutocompleteExampleComponent;
  let fixture: ComponentFixture<AutocompleteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [AutocompleteExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutocompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
