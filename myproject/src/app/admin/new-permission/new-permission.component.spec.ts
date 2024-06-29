import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPermissionComponent } from './new-permission.component';

describe('NewPermissionComponent', () => {
  let component: NewPermissionComponent;
  let fixture: ComponentFixture<NewPermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPermissionComponent]
    });
    fixture = TestBed.createComponent(NewPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
