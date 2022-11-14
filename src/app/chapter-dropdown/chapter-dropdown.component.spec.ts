import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterDropdownComponent } from './chapter-dropdown.component';

describe('ChapterDropdownComponent', () => {
  let component: ChapterDropdownComponent;
  let fixture: ComponentFixture<ChapterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
