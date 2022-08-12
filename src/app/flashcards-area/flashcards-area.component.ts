import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { FlashcardsListService } from '../services/flashcards-list.service';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {

  flashcards: Flashcard[] = [];

  constructor(private _flashcardsService: FlashcardsListService) { }

  ngOnInit(): void {
	this._flashcardsService.currentFlashCardsList$.subscribe(
		flashcardsList => {
			this.flashcards = flashcardsList;
		}
	)
  }

  changeDisplay(i: number) {
	this.flashcards[i].displayed = false;
	console.log(this.flashcards);
  }
}
