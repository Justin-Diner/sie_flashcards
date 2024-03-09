import { Injectable } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { BehaviorSubject, Subject } from 'rxjs';
import {FullFlashcardsListService } from '../services/full-flashcards-list.service'
import CategorySubject from '../classes/subject';

@Injectable({
  providedIn: 'root'
})
export class SelectedSubjectService {

  private _selectedSubject = new BehaviorSubject<CategorySubject>(new CategorySubject(1, 'sie')); 
	selectedSubject$ = this._selectedSubject.asObservable();

  constructor() { }

	setSelectedSubject(categorySubject: CategorySubject) {
		this._selectedSubject.next(categorySubject);
	}
}
