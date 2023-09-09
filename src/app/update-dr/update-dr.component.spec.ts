import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrComponent } from './update-dr.component';

describe('UpdateDrComponent', () => {
  let component: UpdateDrComponent;
  let fixture: ComponentFixture<UpdateDrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDrComponent]
    });
    fixture = TestBed.createComponent(UpdateDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
