import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfreindpageComponent } from './addfreindpage.component';

describe('AddfreindpageComponent', () => {
  let component: AddfreindpageComponent;
  let fixture: ComponentFixture<AddfreindpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfreindpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfreindpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
