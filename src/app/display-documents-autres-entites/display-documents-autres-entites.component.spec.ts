import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDocumentsAutresEntitesComponent } from './display-documents-autres-entites.component';

describe('DisplayDocumentsAutresEntitesComponent', () => {
  let component: DisplayDocumentsAutresEntitesComponent;
  let fixture: ComponentFixture<DisplayDocumentsAutresEntitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDocumentsAutresEntitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDocumentsAutresEntitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
