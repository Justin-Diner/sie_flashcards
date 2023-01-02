import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { Observable } from 'rxjs';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { SubscriptionsContainer } from '../classes/subscriptions-container';
import { UntypedFormBuilder } from '@angular/forms';
import { RefreshFullFlashcardsService } from '../services/refresh-full-flashcards.service'

@Component({
  selector: 'app-chapter-dropdown',
  templateUrl: './chapter-dropdown.component.html',
  styleUrls: ['./chapter-dropdown.component.css']
})
export class ChapterDropdownComponent implements OnInit {

	public currentChapterList: number[] = [];
	private currentFlashcardList: Flashcard[] = [];
	private subs = new SubscriptionsContainer();

  constructor(
		private flashcardsListService: FlashcardsListService, 
		private refreshFullFlashcardsService: RefreshFullFlashcardsService
	) { }

  ngOnInit(): void {
	this.refreshFullFlashcardsService.triggerUpdateFlashcards(true);
	this.identifyChapters();
  }

  identifyChapters() {
	this.subs.add = this.flashcardsListService.currentFlashCardsList$.subscribe(flashcardsList => {	
		this.currentFlashcardList = flashcardsList;
		this.currentChapterList = this.fillChapterList();
		this.subs.dispose();
	})
  }

  fillChapterList(): number[] {
	let finalChapterList: number[] = [];
	let chapterListMap = this.fillChapterListMap(this.currentFlashcardList);

	for (const key of chapterListMap.keys()){
		finalChapterList.push(key);
	}
	
	finalChapterList.sort((a, b) => a - b);
	return finalChapterList
  }

  fillChapterListMap(flashcards: Flashcard[]): Map<number, number> {
	let chapterListMap = new Map<number, number>()

	for (let i = 0; i < this.currentFlashcardList.length; i++) {
		
		let chapterNumber: number | undefined = flashcards[i].chapter;
		if (chapterNumber == undefined) {
			continue
		} else if (chapterNumber !== undefined && chapterListMap.has(chapterNumber)) {
			chapterListMap.set(chapterNumber, (chapterListMap.get(chapterNumber) ?? 0) + 1)
		} else {
			chapterListMap.set(chapterNumber, 1);
		}
  	}
	return chapterListMap;
  }
}
