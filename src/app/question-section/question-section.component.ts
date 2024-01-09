import { Component, Input } from '@angular/core';
import { Question, Section } from '../security-form/security-form.component';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent {
  @Input() section: Section = {
    questions: []
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.section.questions, event.previousIndex, event.currentIndex);
  }

  questionClicked(index:number) {
    console.log(index);
  }

  onChangeEvent(event: MatCheckboxChange, i: number) {
    console.table(event);
    if(this.section !== null && this.section?.questions !== null) {
      let defaultText: string = 'No Answer';
      if(event.checked) {
        defaultText = 'Yes';
      }
      if(!event.checked) {
        defaultText = 'No';
      }
      this.section.questions[i].label = defaultText;
      this.section.questions[i].checked = event.checked;
    }
  }

  getCheckedClass(q: Question){
    if(q.checked === null || q.checked === undefined) {
      return '';
    }
    if(q.checked) { return 'checked'; }
    return 'not-checked';
  }
}
