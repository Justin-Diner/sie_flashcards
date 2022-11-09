import { Component, Input, OnInit } from '@angular/core';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { CurrentDisplayedFlashcardsService } from '../services/current-displayed-flashcards.service'; 

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {

  constructor(private _flashcardsService: FlashcardsListService, private currentDisplayedFlashcardsService: CurrentDisplayedFlashcardsService) { }

  ngOnInit(): void {

  }

  restoreFlashcards() { 
	this.currentDisplayedFlashcardsService.updateFlashcards(2);
  }
}
