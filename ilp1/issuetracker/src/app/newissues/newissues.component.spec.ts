import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewissuesComponent } from './newissues.component';

describe('NewissuesComponent', () => {
  let component: NewissuesComponent;
  let fixture: ComponentFixture<NewissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
