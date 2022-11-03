import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { TitleHeadingComponent } from './title-heading/title-heading.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { FlashcardsAreaComponent } from './flashcards-area/flashcards-area.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { FlashcardsListService } from './services/flashcards-list.service';
import { HttpClientModule } from '@angular/common/http';
import { TrashButtonComponent } from './trash-button/trash-button.component';
import FullFlashcardsListService from './services/full-flashcards-list.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntryCardComponent,
    TitleHeadingComponent,
    FlashcardComponent,
    FlashcardsAreaComponent,
    ResetButtonComponent,
    TrashButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatMenuModule,
	MatCardModule,
	MatInputModule,
	MatDividerModule,
	FormsModule,
	MatSidenavModule,
	HttpClientModule,
  ],
  providers: [
	FlashcardsListService,
	FullFlashcardsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
