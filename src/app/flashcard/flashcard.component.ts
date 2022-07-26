import { Component, Inject, Input, OnInit } from '@angular/core';
import { Flashcard } from '../classes/flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
	@Input() flashcard!: Flashcard;
	showAnswer: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  revealAnswer() {
	this.showAnswer = !this.showAnswer;
  }
}
