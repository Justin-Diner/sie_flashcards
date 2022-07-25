import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
	question: string = "";
	answer: string = "";
	showAnswer: boolean = false;

  constructor() {
	this.question;
	this.answer;
   }

  ngOnInit(): void {
  }

  revealAnswer() {
	this.showAnswer = !this.showAnswer;
  }
}
