import { Injectable } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { Subject } from 'rxjs';
import {FullFlashcardsListService } from '../services/full-flashcards-list.service'

@Injectable({
	providedIn: 'root'
}
)
export class FlashcardsListService {

	private _flashCardsList = new Subject<Flashcard[]>(); 
	currentFlashCardsList$ = this._flashCardsList.asObservable();

  constructor(private fullFlashcardsListService: FullFlashcardsListService) { }

	setFlashcards(flashcards: Flashcard[]) {
		this._flashCardsList.next(flashcards);
	}
}

