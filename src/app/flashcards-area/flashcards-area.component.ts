import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Flashcard } from '../classes/flashcard'
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { of } from 'rxjs';
import {map} from 'rxjs';
import { FlashcardsListService } from '../services/flashcards-list.service';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {
	
  fullFlashcards: Flashcard[] = [];
  retrieveFlashcardsResponse: Observable<Flashcard[]> = of([]);

  constructor(
	private fullFlashcardsListService: FullFlashcardsListService,
	private flashcardsList: FlashcardsListService
	 ) {}


  ngOnInit(): void {
	this.retrieveFlashcardsResponse = this.retrieveFlashcards();
	this.setfullFlashcards();
  }

  setfullFlashcards() {
	this.fullFlashcardsListService.getFlashcardList().subscribe(response => {
		this.fullFlashcards = response;
		this.flashcardsList.setFlashcards(this.fullFlashcards);
	})
  }

  retrieveFlashcards(): Observable<Flashcard[]> {
   return this.fullFlashcardsListService.getAll();
	}

  deleteConfirmation(i: number) {
	if (confirm("Are you sure you want to delete this card? It will be PERMANENTLY deleted. The Green Button will note that the card is learned.")) {
		this.deleteClickedCard(i);
	}
  }

  deleteClickedCard(i: number) {
	console.log(i);
	let clickedFlashcardId = this.fullFlashcards![i]["id"];
	this.fullFlashcardsListService.deleteFlashcardById(clickedFlashcardId)
		.subscribe(data => {
			let resp = JSON.stringify(data);
			console.log(resp);
			this.retrieveFlashcardsResponse = this.retrieveFlashcards();
		})
  }
}
