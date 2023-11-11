import { Component, Input } from '@angular/core';
import { Section } from '../security-form/security-form.component';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent {
  @Input() section?: Section;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.section?.questions??[], event.previousIndex, event.currentIndex);
  }
}
