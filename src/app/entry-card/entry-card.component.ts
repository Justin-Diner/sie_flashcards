import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.css'],
//  encapsulation: ViewEncapsulation.None,
})
export class EntryCardComponent implements OnInit {
	isShown: boolean = true;
	isCreateCard: boolean = false;
	question:string = '';
	answer:string = '';

  constructor() { 
	this.isShown;
  }

  ngOnInit(): void {
  }

  closeCreateCard() {
	this.isShown = !this.isShown;
	this.isCreateCard = !this.isCreateCard;
  }

  updateQuestion(value:string) {
	this.question = value;
	console.log(this.question);
  }
}

