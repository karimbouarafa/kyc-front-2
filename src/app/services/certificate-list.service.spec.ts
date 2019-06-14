import { TestBed } from '@angular/core/testing';

import { CertificateListService } from './certificate-list.service';

describe('CertificateListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CertificateListService = TestBed.get(CertificateListService);
    expect(service).toBeTruthy();
  });
});
