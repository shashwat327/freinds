import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecoverComponent } from './profilecover.component';

describe('ProfilecoverComponent', () => {
  let component: ProfilecoverComponent;
  let fixture: ComponentFixture<ProfilecoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
