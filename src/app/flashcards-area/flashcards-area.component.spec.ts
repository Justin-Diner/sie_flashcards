import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsAreaComponent } from './flashcards-area.component';

describe('FlashcardsAreaComponent', () => {
  let component: FlashcardsAreaComponent;
  let fixture: ComponentFixture<FlashcardsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardsAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
