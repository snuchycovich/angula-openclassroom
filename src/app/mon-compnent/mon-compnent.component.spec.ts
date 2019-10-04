import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCompnentComponent } from './mon-compnent.component';

describe('MonCompnentComponent', () => {
  let component: MonCompnentComponent;
  let fixture: ComponentFixture<MonCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
