import { TestBed } from '@angular/core/testing';

import { RefreshFullFlashcardsService } from './refresh-full-flashcards.service';

describe('RefreshFullFlashcardsService', () => {
  let service: RefreshFullFlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshFullFlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
