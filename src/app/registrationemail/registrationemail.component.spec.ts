import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationemailComponent } from './registrationemail.component';

describe('RegistrationemailComponent', () => {
  let component: RegistrationemailComponent;
  let fixture: ComponentFixture<RegistrationemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
