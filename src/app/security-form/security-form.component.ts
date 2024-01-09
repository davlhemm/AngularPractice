import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-security-form',
  templateUrl: './security-form.component.html',
  styleUrls: ['./security-form.component.css']
})
export class SecurityFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  //Derive dynamic form from questions
  //someForm: FormArray = this.fb.array([this.fb.control('')]);

  //TODO: Embed sections here
  sections?: Section[];

  ngOnInit(): void {
    //Set up form
    this.sections = this.buildSections();
  }

  buildSections(): Section[] {
    var sections: Section[] = [];
    sections.push(new Section([new Question('Q1','EXTRA'),new Question('Q2'),new Question('Q3')], 'Section 1'));
    sections.push(new Section([new Question('Q1'),new Question('Q2'),new Question('Q3')], 'Section 2'));
    return sections;
  }

  drop(event: CdkDragDrop<Section[]>) {
    moveItemInArray(this.sections??[], event.previousIndex, event.currentIndex);
  }
}

export class Section {
  questions: Question[];
  title?: string;

  constructor(qs: Question[], title: string) {
    this.questions = qs;
    this.title = title;
  }
}

export class Question {
  text?: string;
  checked?: boolean;
  label?: string;
  extra?: string | undefined;

  constructor(text:string, extra?: string | undefined) {
    this.text = text;
    this.checked = undefined;
    this.label = 'No Answer';
    this.extra = extra;
  }
}

