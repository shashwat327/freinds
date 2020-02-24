import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankcoverComponent } from './blankcover.component';

describe('BlankcoverComponent', () => {
  let component: BlankcoverComponent;
  let fixture: ComponentFixture<BlankcoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankcoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankcoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
