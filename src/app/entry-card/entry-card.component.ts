import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { FlashcardComponent } from '../flashcard/flashcard.component';
import { FlashcardsListService } from '../services/flashcards-list.service';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css'],
})
export class EntryCardComponent implements OnInit {
	isShown: boolean = true;
	isCreateCard: boolean = false;
	question:string = '';
	answer:string = '';
	flashcards: Flashcard[] = []; 
	currentCard?: Flashcard;

  constructor(private _flashcardsService: FlashcardsListService) { 
	this.isShown;
  }

  ngOnInit(): void {
  }

  closeCreateCard() {
	this.isShown = !this.isShown;
	this.isCreateCard = !this.isCreateCard;
  }

// These methods show that the question and answer are being tracked when input. 
//  updateQuestion() {
//	console.log(this.question);
//  }

//  updateAnswer() {
//	console.log(this.answer);
//  }

  newFlashCard() {
	this.currentCard = new Flashcard(this.question, this.answer);
	this.flashcards.push(this.currentCard);
	this._flashcardsService.getFlashcards(this.flashcards);
	}


}


