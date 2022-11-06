import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Flashcard } from '../classes/flashcard';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FullFlashcardsListService {
	
	private baseURL: string = "/api/v1/flashcards";

  constructor(private http: HttpClient) { }

	getFlashcardList() {
		return this.http.get<Flashcard[]>(this.baseURL);
	}

  	getAll(): Observable<Flashcard[]>{
		return this.http.get<Flashcard[]>(this.baseURL).pipe(map(flashcards => flashcards.map(flashcard =>  {
			if (flashcard.displayed === undefined) {
				flashcard.displayed = true;
			}
			return flashcard;
		})));
	} 

	addFlashcard(newFlashCard: Flashcard) {
		return this.http.post(this.baseURL, newFlashCard, { responseType: 'text' as 'json' });
	}

	deleteFlashcardById(id: any) {
		return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' as 'json' })
	};

	private handleError(error: HttpErrorResponse): any {
		if (error.error instanceof ErrorEvent) {
			console.error ('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
			}
		return throwError(`Something bad happened; please try again later.`);
	}
};


export default FullFlashcardsListService;