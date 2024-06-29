import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserlistComponent } from './new-userlist.component';

describe('NewUserlistComponent', () => {
  let component: NewUserlistComponent;
  let fixture: ComponentFixture<NewUserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserlistComponent]
    });
    fixture = TestBed.createComponent(NewUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
