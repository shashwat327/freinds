import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfreindpageComponent } from './myfreindpage.component';

describe('MyfreindpageComponent', () => {
  let component: MyfreindpageComponent;
  let fixture: ComponentFixture<MyfreindpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfreindpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfreindpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
