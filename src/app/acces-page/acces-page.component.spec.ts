import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesPageComponent } from './acces-page.component';

describe('AccesPageComponent', () => {
  let component: AccesPageComponent;
  let fixture: ComponentFixture<AccesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
