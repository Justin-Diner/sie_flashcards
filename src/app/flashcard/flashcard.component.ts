import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Flashcard } from '../classes/flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})

export class FlashcardComponent implements OnInit {
	@Input() flashcard!: Flashcard;
	showAnswer: boolean = false;
	delete: boolean = false;
	@Output() hideCard = new EventEmitter();
	@Output() deleteCard = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  revealAnswer() {
	this.showAnswer = !this.showAnswer;
  }

  hideCurrentCard() {
	this.hideCard.emit();
  }

  removeCard() {
	this.deleteCard.emit();
  }
}

export default FlashcardComponent;
