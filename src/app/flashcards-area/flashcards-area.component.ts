import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Flashcard } from '../classes/flashcard'
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { of, map, tap } from 'rxjs';
import { switchMap } from 'rxjs';
import { CurrentDisplayedFlashcardsService } from '../services/current-displayed-flashcards.service';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {
	
  displayedFlashcards: Flashcard[] = [];
  displayedFlashcards$: Observable<Flashcard[]> = of([]);

  constructor(
	private fullFlashcardsListService: FullFlashcardsListService,
	private currentDisplayedFlashcards: CurrentDisplayedFlashcardsService
	 ) {}


  ngOnInit(): void {
	this.displayedFlashcards$ = this.retrieveFlashcards();
	this.setfullFlashcards();
	this.displayedFlashcards$ = this.currentDisplayedFlashcards.refreshFlashCardsList$.pipe(
		switchMap(update => this.retrieveFlashcards()),
		tap(update => this.setfullFlashcards())
		);
  }

  retrieveFlashcards(): Observable<Flashcard[]> {
	return this.fullFlashcardsListService.getAll().pipe(
			map(flashcards => flashcards
				.map(flashcard =>  {
					if (flashcard.displayed === undefined) {
						flashcard.displayed = true;
					}
				return flashcard;
				}))
	);
  }

  setfullFlashcards() {
	this.displayedFlashcards$.subscribe(flashcards => {
		this.displayedFlashcards = flashcards;
	})
  }

  updateFlashcards() {
	 this.displayedFlashcards$ = this.currentDisplayedFlashcards.refreshFlashCardsList$.pipe(switchMap(update => this.retrieveFlashcards()));
	 this.setfullFlashcards();
  }

  deleteConfirmation(i: number) {
	if (confirm("Are you sure you want to delete this card? It will be PERMANENTLY deleted. The Green Button will note that the card is learned.")) {
		this.deleteClickedCard(i);
	}
  }

  deleteClickedCard(i: number) {
	let clickedFlashcardId = this.displayedFlashcards![i]["id"];
	this.fullFlashcardsListService.deleteFlashcardById(clickedFlashcardId)
		.subscribe(data => {
			console.log(data);
			this.updateFlashcards();
		})
  }
}
