import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardsAreaComponent } from './flashcards-area/flashcards-area.component';

const routes: Routes = [
	{ path: 'flashcards', component: FlashcardsAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
