import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flashcard } from '../classes/flashcard';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {

  flashcards: Flashcard[] = [];
  fullFlashcards?: any;

  constructor(private _flashcardsService: FlashcardsListService, private fullFlashCardsListService: FullFlashcardsListService) { }

  ngOnInit(): void {
	//this._flashcardsService.currentFlashCardsList$.subscribe(
	//	(flashcardsList) => {
	//		this.flashcards = flashcardsList;
	//		console.log(this.flashcards);
	//	}
	//)
	this.retrieveFlashcards();
  }

  retrieveFlashcards(): void {
	this.fullFlashCardsListService.getAll()
		.subscribe(response => 
			this.fullFlashcards = response.map(item => {
				return item = new Flashcard (
					item.question,
					item.answer,
					item.id,
					item.chapter,
				);
			})
		)
	}


  changeDisplay(i: number) {
	this.flashcards[i].displayed = !this.flashcards[i].displayed;
	this.flashcards.splice(i, 0)
	this._flashcardsService.getFlashcards(this.flashcards);
  }

  deleteClickedCard(i: number) {
	this.flashcards.splice(i, 1)
	this._flashcardsService.getFlashcards(this.flashcards);
  }

  deleteConfirmation(i: number) {
	if (confirm("Are you sure you want to delete this card? It will be PERMANENTLY deleted. The Green Button will note that the card is learned.")) {
		this.deleteClickedCard(i);
	}
  }
}
