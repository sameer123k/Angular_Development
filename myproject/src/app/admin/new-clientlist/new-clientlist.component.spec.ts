import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientlistComponent } from './new-clientlist.component';

describe('NewClientlistComponent', () => {
  let component: NewClientlistComponent;
  let fixture: ComponentFixture<NewClientlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClientlistComponent]
    });
    fixture = TestBed.createComponent(NewClientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
