import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Flashcard } from '../classes/flashcard';
import { map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FullFlashcardsListService {
  
	private baseURL: string = "/api/v1/flashcards";

  constructor(private http: HttpClient) { }

  	getAll() {
		console.log("it works!");
		return this.http.get<Flashcard[]>(this.baseURL);
	} 

	private handleError(error: HttpErrorResponse): any {
		if (error.error instanceof ErrorEvent) {
			console.error ('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
			}
		return throwError(`Something bad happened; pelase try again later.`);
	}
};


export default FullFlashcardsListService;
