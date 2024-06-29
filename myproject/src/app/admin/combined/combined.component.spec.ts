import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedComponent } from './combined.component';

describe('CombinedComponent', () => {
  let component: CombinedComponent;
  let fixture: ComponentFixture<CombinedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombinedComponent]
    });
    fixture = TestBed.createComponent(CombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
