import { TestBed } from '@angular/core/testing';

import { DocumentListEntiteService } from './document-list-entite.service';

describe('DocumentListEntiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentListEntiteService = TestBed.get(DocumentListEntiteService);
    expect(service).toBeTruthy();
  });
});
