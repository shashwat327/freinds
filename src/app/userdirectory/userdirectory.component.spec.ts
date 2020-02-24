import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdirectoryComponent } from './userdirectory.component';

describe('UserdirectoryComponent', () => {
  let component: UserdirectoryComponent;
  let fixture: ComponentFixture<UserdirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
