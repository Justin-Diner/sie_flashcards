import { TestBed } from '@angular/core/testing';

import { FlashcardsListService } from './flashcards-list.service';

describe('FlashcardsListService', () => {
  let service: FlashcardsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
