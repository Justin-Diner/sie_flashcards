import { Component, Inject, Input, OnInit } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { FlashcardsAreaComponent } from '../flashcards-area/flashcards-area.component';
import { FlashcardsListService } from '../services/flashcards-list.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
	@Input() flashcard!: Flashcard;
	showAnswer: boolean = false;
	displayed: boolean = true;

  constructor() {
   }

  ngOnInit(): void {
  }

  revealAnswer() {
	this.showAnswer = !this.showAnswer;
  }

  removeCard() {
	this.displayed = false;
	console.log(this.displayed);
  }
}
