import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCertificatComponent } from './consulter-certificat.component';

describe('ConsulterCertificatComponent', () => {
  let component: ConsulterCertificatComponent;
  let fixture: ComponentFixture<ConsulterCertificatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterCertificatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
