import { Component, Input, OnInit } from '@angular/core';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { Flashcard } from '../classes/flashcard';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {
	flashcards: Flashcard[] = []; 

  constructor(private _flashcardsService: FlashcardsListService) { }

  ngOnInit(): void {
	this._flashcardsService.currentFlashCardsList$.subscribe(
		flashcardsList => {
			this.flashcards = flashcardsList;
		}
	)
  }

  restoreFlashcards() {
	this._flashcardsService.getFlashcards(this.flashcards);
	console.log(this.flashcards);
	}
}
