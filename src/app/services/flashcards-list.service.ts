import { Injectable } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { Subject } from 'rxjs';

@Injectable(
)
export class FlashcardsListService {

	private _flashCardsList = new Subject<Flashcard[]>(); 
	currentFlashCardsList$ = this._flashCardsList.asObservable();

  constructor() { }

	getFlashcards(flashcards: Flashcard[]) {
		this._flashCardsList.next(flashcards);
	}
}

