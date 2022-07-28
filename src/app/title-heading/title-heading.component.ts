import { Component, OnInit } from '@angular/core';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { Flashcard } from '../classes/flashcard';
import { ResetButtonComponent } from '../reset-button/reset-button.component';


@Component({
  selector: 'app-title-heading',
  templateUrl: './title-heading.component.html',
  styleUrls: ['./title-heading.component.css']
})
export class TitleHeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
