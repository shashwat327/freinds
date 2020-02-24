import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridpostComponent } from './gridpost.component';

describe('GridpostComponent', () => {
  let component: GridpostComponent;
  let fixture: ComponentFixture<GridpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
