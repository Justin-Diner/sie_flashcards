import { TestBed } from '@angular/core/testing';

import { CurrentDisplayedFlashcardsService } from './current-displayed-flashcards.service';

describe('CurrentDisplayedFlashcardsService', () => {
  let service: CurrentDisplayedFlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDisplayedFlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
