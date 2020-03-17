import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreindprofileComponent } from './freindprofile.component';

describe('FreindprofileComponent', () => {
  let component: FreindprofileComponent;
  let fixture: ComponentFixture<FreindprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreindprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreindprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
