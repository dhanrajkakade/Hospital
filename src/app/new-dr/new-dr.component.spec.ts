import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDrComponent } from './new-dr.component';

describe('NewDrComponent', () => {
  let component: NewDrComponent;
  let fixture: ComponentFixture<NewDrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDrComponent]
    });
    fixture = TestBed.createComponent(NewDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
