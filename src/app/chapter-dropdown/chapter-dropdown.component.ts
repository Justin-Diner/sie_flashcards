import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../classes/flashcard';
import { Observable } from 'rxjs';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { SubscriptionsContainer } from '../classes/subscriptions-container';

@Component({
  selector: 'app-chapter-dropdown',
  templateUrl: './chapter-dropdown.component.html',
  styleUrls: ['./chapter-dropdown.component.css']
})
export class ChapterDropdownComponent implements OnInit {

	public currentChapterList = [];
	private currentFlashcardList: Flashcard[] = [];
	private subs = new SubscriptionsContainer();

  constructor(private flashcardsListService: FlashcardsListService) { }

  ngOnInit(): void {
	this.identifyChapters();
  }

  identifyChapters() {
	this.subs.add = this.flashcardsListService.currentFlashCardsList$.subscribe(flashcardsList => {
		this.currentFlashcardList = flashcardsList;
		this.fillChapterList();
		this.subs.dispose();
	})
  }

  fillChapterList(): number[] {
	let chapterListMap = new Map<number, number>()
	let finalChapterList: number[] = [];

	for (let i = 0; i < this.currentFlashcardList.length; i++) {
		
		let chapterNumber: number | undefined = this.currentFlashcardList[i].chapter;
		if (chapterNumber == undefined) {
			continue
		} else if (chapterNumber !== undefined && chapterListMap.has(chapterNumber)) {
			chapterListMap.set(chapterNumber, (chapterListMap.get(chapterNumber) ?? 0) + 1)
		} else {
			chapterListMap.set(chapterNumber, 1);
		}
  	}
	console.log(chapterListMap);
	console.log(finalChapterList);
	return finalChapterList
  }
}
