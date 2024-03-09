import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of, map, tap, share, Subject, shareReplay } from 'rxjs';
import { CategorySubject } from '../classes/subject'
import { SubjectsService } from '../services/subjects.service';
import { FlashcardsListService } from '../services/flashcards-list.service';
import { RefreshFullFlashcardsService } from '../services/refresh-full-flashcards.service';
import { SelectedSubjectService } from '../services/selected-subject.service';

@Component({
  selector: 'app-subject-list-dropdown',
  templateUrl: './subject-list-dropdown.component.html',
  styleUrls: ['./subject-list-dropdown.component.css']
})
export class SubjectListDropdownComponent implements OnInit {

  subjects$: Observable<CategorySubject[]> = of([]);
  subjects: any[] = [];
  selectedSubjectTitle: String = "";

  constructor(
    private subjectsService: SubjectsService,
    private flashcardsListService: FlashcardsListService,
    private refreshFullFlashcards: RefreshFullFlashcardsService,
    private subjectService: SubjectsService,
    private selectedSubjectService: SelectedSubjectService
  ) { }

  ngOnInit(): void {
    this.identifySubjects()
  }

  identifySubjects(): void {
     this.subjectsService.getSubjectList().subscribe(x => {
        for (let subject of x) {
          this.subjects.push(subject);
        }
    });
  }

  setSelectedSubject(subject: CategorySubject)  {
    this.selectedSubjectTitle = subject.name
    this.selectedSubjectService.setSelectedSubject(subject);
    this.subjectService.getFlashcardsBySubject(subject.id).subscribe(selectedFlashcards => {
      this.flashcardsListService.setFlashcards(selectedFlashcards)
      this.refreshFullFlashcards.triggerUpdateFlashcards(false);
    })
  }

}
