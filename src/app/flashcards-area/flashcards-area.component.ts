import { Component, OnInit } from '@angular/core';
import e from 'express';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { Flashcard } from '../classes/flashcard'
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {
	
  fullFlashcards?: Flashcard[] = [];
  retrieveFlashcardsResponse: Observable<Flashcard[]> = of([]);

  constructor(
	private fullFlashcardsListService: FullFlashcardsListService,
	 ) {}

 
  ngOnInit(): void {
	this.retrieveFlashcardsResponse = this.retrieveFlashcards();
  }

  retrieveFlashcards(): Observable<Flashcard[]> {
   return this.fullFlashcardsListService.getAll();

	//this.fullFlashcardsListService.getAll()
	//	.subscribe(response => {
	//		console.log(response);
	//		this.fullFlashcards = response
  	//	})
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
	this.fullFlashcardsListService.deleteFlashcardById(clickedFlashcardId)
		.subscribe(data => {
			let resp = JSON.stringify(data);
			console.log(resp);
		})
  }
}
