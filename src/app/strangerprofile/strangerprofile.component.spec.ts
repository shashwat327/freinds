import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangerprofileComponent } from './strangerprofile.component';

describe('StrangerprofileComponent', () => {
  let component: StrangerprofileComponent;
  let fixture: ComponentFixture<StrangerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrangerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrangerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
