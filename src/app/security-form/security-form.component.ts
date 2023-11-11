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

  //Question sets input
  //questions: string[] = [];
  //Derive dynamic form from questions
  //someForm: FormArray = this.fb.array([this.fb.control('')]);

  //TODO: Embed sections here
  sections?: Section[];// = this.buildSections();//['1','2','3'];

  ngOnInit(): void {
    //Set up form
    this.sections = this.buildSections();
    //console.table(this.sections);
  }

  buildSections(): Section[] {
    var sections: Section[] = [];
    sections.push(new Section(['Q1','Q2','Q3'], 'Section 1'));
    sections.push(new Section(['Q1','Q2','Q3'], 'Section 2'));
    return sections;
  }

  drop(event: CdkDragDrop<Section[]>) {
    moveItemInArray(this.sections??[], event.previousIndex, event.currentIndex);
  }
}

export class Section {
  questions?: string[];
  title?: string;

  constructor(questions: string[], title: string) {
    this.questions = questions;
    this.title = title;
  }
}

