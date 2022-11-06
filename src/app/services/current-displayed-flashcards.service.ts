import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { Flashcard } from '../classes/flashcard';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';


@Injectable({
  providedIn: 'root'
})

export class CurrentDisplayedFlashcardsService {

	private _fullFlashCardsList = new Subject<Flashcard[]>(); 
	currentFullFlashCardsList$ = this._fullFlashCardsList.asObservable();

	constructor(private http: HttpClient, private fullFlashcardsListService: FullFlashcardsListService) { }

	getFlashcards(flashcards: Flashcard[]) {
		this._fullFlashCardsList.next(flashcards);
	}

}
