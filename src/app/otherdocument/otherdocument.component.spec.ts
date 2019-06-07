import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherdocumentComponent } from './otherdocument.component';

describe('OtherdocumentComponent', () => {
  let component: OtherdocumentComponent;
  let fixture: ComponentFixture<OtherdocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherdocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
