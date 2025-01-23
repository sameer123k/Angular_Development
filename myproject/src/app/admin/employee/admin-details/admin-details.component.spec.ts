import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsComponent } from './admin-details.component';

describe('AdminDetailsComponent', () => {
  let component: AdminDetailsComponent;
  let fixture: ComponentFixture<AdminDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
