import { TestBed } from '@angular/core/testing';

import { FullFlashcardsListService } from './full-flashcards-list.service';

describe('FullFlashcardsListService', () => {
  let service: FullFlashcardsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullFlashcardsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
