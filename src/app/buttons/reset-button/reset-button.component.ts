import { Component, Input, OnInit } from '@angular/core';
import { FlashcardsListService } from '../../services/flashcards-list.service';
import { RefreshFullFlashcardsService } from '../../services/refresh-full-flashcards.service'; 

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {

  constructor(private _flashcardsService: FlashcardsListService, private refreshFullFlashcards: RefreshFullFlashcardsService) { }

  ngOnInit(): void {

  }

  restoreFlashcards() { 
	this.refreshFullFlashcards.triggerUpdateFlashcards(true);
  }
}
