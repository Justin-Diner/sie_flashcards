import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { FullFlashcardsListService } from '../services/full-flashcards-list.service';
import { FormsModule } from '@angular/forms';
import { FlashcardsAreaComponent } from '../flashcards-area/flashcards-area.component';
import { EventEmitter } from '@angular/core';
import { RefreshFullFlashcardsService } from '../services/refresh-full-flashcards.service';
import { SubscriptionsContainer } from '../classes/subscriptions-container';
import { SelectedSubjectService } from '../services/selected-subject.service';
import { Subscription } from 'rxjs';
import CategorySubject from '../classes/subject';

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
	chapter?:string = ''; 
	@Output() newFlashcard?: Flashcard;
  selectedSubject: CategorySubject = new CategorySubject(1, "sie");
  private selectedSubjectSubscription!: Subscription;

	private subs = new SubscriptionsContainer();
	
  constructor(
      private _flashcardsService: FlashcardsListService, 
      private fullFlashcardsListService: FullFlashcardsListService, 
      private refreshFullFlashcardsService: RefreshFullFlashcardsService,
      private selectedSubjectService: SelectedSubjectService
    ) { 
			this.isShown;
  }

  ngOnInit(): void {
    this.selectedSubjectSubscription = this.selectedSubjectService.selectedSubject$.subscribe(value => {
      this.selectedSubject = value;
    })
  }

  closeCreateCard() {
	this.isShown = !this.isShown;
	this.isCreateCardButton = !this.isCreateCardButton;
  }

// These methods show that the question and answer are being tracked when input. 
//  updateQuestion(val: string) {
//	console.log(this.question);
//  }

//  updateAnswer() {
//	console.log(this.answer);
//  }

  updateChapter(val?: string) {
	this.chapter = val;
  }

  newFlashCard(): void {
	  let flashcardToAdd: Flashcard = new Flashcard(this.question, this.answer, this.selectedSubject.id, Number(this.chapter));
    console.log(flashcardToAdd);
	  this.subs.add = this.fullFlashcardsListService.addFlashcard(flashcardToAdd).subscribe(data => {
      console.log(data);
		  this.refreshFullFlashcardsService.triggerUpdateFlashcards(true);
		  this.subs.dispose();
		});
	}
}


