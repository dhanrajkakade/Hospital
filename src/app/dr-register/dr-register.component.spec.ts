import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrRegisterComponent } from './dr-register.component';

describe('DrRegisterComponent', () => {
  let component: DrRegisterComponent;
  let fixture: ComponentFixture<DrRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrRegisterComponent]
    });
    fixture = TestBed.createComponent(DrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
