import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Flashcard } from '../classes/flashcard';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';


@Injectable({
  providedIn: 'root'
})

export class CurrentDisplayedFlashcardsService {

	public refreshFlashCardsList$ = new BehaviorSubject<boolean>(true); 

	constructor(private http: HttpClient, private fullFlashcardsListService: FullFlashcardsListService) { }

	updateFlashcards(refreshItem: any) {
		this.refreshFlashCardsList$.next(!this.refreshFlashCardsList$);
	}
}
