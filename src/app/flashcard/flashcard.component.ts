import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import FullFlashcardsListService from '../services/full-flashcards-list.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})

export class FlashcardComponent implements OnInit {
	@Input() flashcard!: Flashcard;
	showAnswer: boolean = false;
	displayed: boolean = true;
	delete: boolean = false;
	@Output() dontDisplay = new EventEmitter();
	@Output() deleteCard = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  revealAnswer() {
	this.showAnswer = !this.showAnswer;
  }

  hideCard() {
	this.dontDisplay.emit();
  }

  removeCard() {
	this.deleteCard.emit();
  }
}
