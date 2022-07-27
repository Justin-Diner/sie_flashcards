import { Component, OnInit } from '@angular/core';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { Flashcard } from '../classes/flashcard';

@Component({
  selector: 'app-title-heading',
  templateUrl: './title-heading.component.html',
  styleUrls: ['./title-heading.component.css']
})
export class TitleHeadingComponent implements OnInit {
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
	for (let flashcard of this.flashcards) {
		flashcard.displayed = true
	}
	this._flashcardsService.getFlashcards(this.flashcards);
	this._flashcardsService.currentFlashCardsList$.subscribe(
		flashcardsList => {
			this.flashcards = flashcardsList;
		}
	)
	console.log(this.flashcards);
	}
}
