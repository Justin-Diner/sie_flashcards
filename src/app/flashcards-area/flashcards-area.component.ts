import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flashcard } from '../classes/flashcard';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { EntryCardComponent } from '../entry-card/entry-card.component';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {

  flashcards: Flashcard[] = [];
  fullFlashcards?: Flashcard[];

  constructor(private _flashcardsService: FlashcardsListService, private fullFlashCardsListService: FullFlashcardsListService) { }

  ngOnInit(): void {
	this.retrieveFlashcards();
  }

  updateFlashcards() {
	this.fullFlashCardsListService.currentFullFlashCardsList$.subscribe(
	  (fullFlashCardsList: any) => {
		return this.fullFlashcards = fullFlashCardsList;
	})
  }

  retrieveFlashcards() {
	this.fullFlashCardsListService.getAll()
		.subscribe(response => {
			this.fullFlashcards = response.map(item => {
				 item = new Flashcard (
					item.question,
					item.answer,
					item.chapter,
					item.id
				);
				return item;
			})
  		})
		this.updateFlashcards();
	}

  deleteConfirmation(i: number) {
	if (confirm("Are you sure you want to delete this card? It will be PERMANENTLY deleted. The Green Button will note that the card is learned.")) {
		this.deleteClickedCard(i);
	}
  }

  deleteClickedCard(i: number) {
	console.log(this.fullFlashcards);
	console.log(i);
	let clickedFlashcardId = this.fullFlashcards![i]["id"];
	this.fullFlashCardsListService.deleteFlashcardById(clickedFlashcardId)
		.subscribe(data => {
			let resp = JSON.stringify(data);
			console.log(resp);
		})
	this.retrieveFlashcards();
  }
}
