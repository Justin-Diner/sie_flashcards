import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { FlashcardComponent } from '../flashcard/flashcard.component';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css'],
//  encapsulation: ViewEncapsulation.None,
})
export class EntryCardComponent implements OnInit {
	isShown: boolean = true;
	isCreateCard: boolean = false;
	question:string = '';
	answer:string = '';
	flashcards: Flashcard[] = []; 
	currentCard?: Flashcard;

  constructor() { 
	this.isShown;
  }

  ngOnInit(): void {
  }

  closeCreateCard() {
	this.isShown = !this.isShown;
	this.isCreateCard = !this.isCreateCard;
  }

  updateQuestion() {
	console.log(this.question);
  }

  updateAnswer() {
	console.log(this.answer);
  }

  newFlashCard() {
	this.currentCard = new Flashcard(this.question, this.answer);
	this.flashcards.push(this.currentCard);
	console.log(this.flashcards);
	}
}


