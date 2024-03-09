import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { CategorySubject } from '../classes/subject';
import { Flashcard } from '../classes/flashcard';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private baseURL: string = "/api/v1/flashcards/subjects";

  constructor(
    private http: HttpClient
  ) { }

	getSubjectList(): Observable<CategorySubject[]> {
		return this.http.get<CategorySubject[]>(this.baseURL);
	}

  getFlashcardsBySubject(id: number): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.baseURL}/${id}`)
  }

  getInitialSubject(): Observable<CategorySubject> {
    return this.http.get<CategorySubject>(`${this.baseURL}/1`)
  }
}
