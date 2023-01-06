import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Flashcard } from '../classes/flashcard'
import { of, map, tap, share, Subject, shareReplay } from 'rxjs';
import { switchMap } from 'rxjs';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { RefreshFullFlashcardsService } from '../services/refresh-full-flashcards.service';
import { FlashcardsListService } from '../services/flashcards-list.service'
import { SubscriptionsContainer } from '../classes/subscriptions-container';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css'],
})
export class FlashcardsAreaComponent implements OnInit {
	
  displayedFlashcards: Flashcard[] = [];
  displayedFlashcards$: Observable<Flashcard[]> = of([]);
  private subs = new SubscriptionsContainer();

  constructor(
	private fullFlashcardsListService: FullFlashcardsListService,
	private refreshFullFlashcards: RefreshFullFlashcardsService,
	private flashcardsListService: FlashcardsListService
	 ) {}


  ngOnInit(): void {
		this.displayedFlashcards$ = this.refreshFullFlashcards.refreshFlashCardsList$.pipe(
			switchMap(update => this.retrieveFlashcards()));
		this.displayedFlashcards$.subscribe(newCards => {
			this.displayedFlashcards = newCards 
			this.flashcardsListService.setFlashcards(this.displayedFlashcards)
		})
  }

  retrieveFlashcards(): Observable<Flashcard[]> {
	return this.fullFlashcardsListService.getAll().pipe(
			tap(x => console.log(x)),
			map(flashcards => flashcards.map( flashcard => {
					if (flashcard.displayed === undefined) {
						flashcard.displayed = true;
					}
				return flashcard;
				}))
	);
  }

  setfullFlashcards() {
	this.subs.add = this.displayedFlashcards$.subscribe(flashcards => {
		this.displayedFlashcards = flashcards as Flashcard[];
		this.subs.dispose();
	})
  }

  updateFlashcards() {
		this.refreshFullFlashcards.triggerUpdateFlashcards(true);

  }

  deleteConfirmation(i: number) {
	if (confirm("Are you sure you want to delete this card? It will be PERMANENTLY deleted. The Green Button will note that the card is learned.")) {
		this.deleteClickedCard(i);
	}
  }

  deleteClickedCard(i: number) {
	let clickedFlashcardId = this.displayedFlashcards![i]["id"];
	this.subs.add = this.fullFlashcardsListService.deleteFlashcardById(clickedFlashcardId).subscribe(data => {
			console.log(data);
			this.refreshFullFlashcards.triggerUpdateFlashcards(true);
			this.subs.dispose();
		})
  }

}
