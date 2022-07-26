import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
	@Input() question: string = "";
	@Input() answer: string = "";
	showAnswer: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }

  revealAnswer() {
	this.showAnswer = !this.showAnswer;
  }
}
