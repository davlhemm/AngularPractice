import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { FormsModule } from '@angular/forms';
import { SecurityFormComponent } from './security-form/security-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    TicTacToeComponent,
    SecurityFormComponent,
    QuestionSectionComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
