import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRowComponent } from './certificate-row.component';

describe('CertificateRowComponent', () => {
  let component: CertificateRowComponent;
  let fixture: ComponentFixture<CertificateRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
