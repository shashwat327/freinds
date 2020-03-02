import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfreindComponent } from './addfreind.component';

describe('AddfreindComponent', () => {
  let component: AddfreindComponent;
  let fixture: ComponentFixture<AddfreindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfreindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfreindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
