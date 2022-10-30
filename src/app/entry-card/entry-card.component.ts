import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { FlashcardsAreaComponent } from '../flashcards-area/flashcards-area.component';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css'],
})
export class EntryCardComponent implements OnInit {
	isCreateCardButton: boolean = false;
	isShown: boolean = true;
	question:string = '';
	answer:string = '';
	chapter?:number; 
	@Output() newFlashcard?: Flashcard;

  constructor(private _flashcardsService: FlashcardsListService, private fullFlashcardsListService: FullFlashcardsListService) { 
	this.isShown;
  }

  ngOnInit(): void {
  }

  closeCreateCard() {
	this.isShown = !this.isShown;
	this.isCreateCardButton = !this.isCreateCardButton;
  }

// These methods show that the question and answer are being tracked when input. 
  updateQuestion(val: string) {
	console.log(this.question);
  }

  updateAnswer() {
	console.log(this.answer);
  }

  updateChapter() {
	console.log(this.chapter);
  }

  newFlashCard() {
	let flashcardToAdd: Flashcard = new Flashcard(this.question, this.answer, this.chapter);
	this.fullFlashcardsListService.addFlashcard(flashcardToAdd)
		.subscribe(data => {
			console.log(data);
		})
	}

}


