import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../classes/flashcard';

@Component({
  selector: 'app-flashcards-area',
  templateUrl: './flashcards-area.component.html',
  styleUrls: ['./flashcards-area.component.css']
})
export class FlashcardsAreaComponent implements OnInit {

  flashcards: Flashcard[] = [];

  constructor() { }

  ngOnInit(): void {
	this.flashcards.push(new Flashcard('Title 1', 'Answer1'));
	this.flashcards.push(new Flashcard('Title 2', 'Answer2'));
  }

}
