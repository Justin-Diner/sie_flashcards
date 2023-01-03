import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Flashcard } from '../classes/flashcard';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FullFlashcardsListService {
	
	private baseURL: string = "/api/v1/flashcards";

  constructor(private http: HttpClient) { }

	getFlashcardList():Observable<Flashcard[]> {
		return this.http.get<Flashcard[]>(this.baseURL);
	}

  getAll(): Observable<Flashcard[]>{
		return this.http.get<Flashcard[]>(this.baseURL)
	} 

	addFlashcard(newFlashCard: Flashcard): Observable<Object> {
		return this.http.post(this.baseURL, newFlashCard, { responseType: 'text' as 'json' });
	}

	deleteFlashcardById(id: any) {
		return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' as 'json' })
	};
};


export default FullFlashcardsListService;