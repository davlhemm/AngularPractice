import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';
import { CdkDragDrop, CdkDragRelease, CdkDragStart, CdkDropList, DropListRef, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  chats: IChatThing[] = [];
  defaultFirstName : string = 'first';
  defaultLastName : string = 'last';
  defaultPhone : string = '777-777-7777';
  person: PersonPhone = {
    firstName: this.defaultFirstName,
    lastName: this.defaultLastName,
    phoneNumber: this.defaultPhone
  };
  phonebook: PersonPhone[] = [];
  phoneForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.defaultFirstName),
    lastName: new FormControl(this.defaultLastName),
    phoneNumber: new FormControl(this.defaultPhone)
  });
  displayedColumns: string[] = [
    'firstName', 'lastName', 'phoneNumber'
  ];
  displayedColumnsOrdered: string[] = this.displayedColumns.slice();

  dataSource = new MatTableDataSource<PersonPhone>(this.phonebook);

  previousIndex?: number;

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  loadData() {
    // Fetch or set your data here
    const newData = this.phonebook;

    this.dataSource.data = newData;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('http://localhost:5121/notify')
      .build();

      connection.start().then(function () {
        console.log("Connected!");
      }).catch(e => {
        return console.error(e);
      });

      connection.on("SendChat", (message: IChatThing) => {
        console.table(message);
        this.chats.push(message);
      });
  }

  onSubmit() {
    //Submit/save phone #
    let newPerson: PersonPhone = {
      firstName:this.phoneForm.value.firstName,
      lastName: this.phoneForm.value.lastName,
      phoneNumber: this.phoneForm.value.phoneNumber
    };
    this.phonebook.push(newPerson);
    this.phonebook.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1);
    this.loadData();
  }

  updateColumnOrder(newOrder: string[]) {
    this.displayedColumnsOrdered = newOrder;
  }

  dropList(event: any) {
    console.table(event);
  }

  dropListDropped(event: CdkDragDrop<string[]>, index?: number) {
    moveItemInArray(this.displayedColumnsOrdered, event.previousIndex, event.currentIndex);
  }

  dragStarted(event: CdkDragStart<string[]>, index?:number) {
    console.table(event);
  }
}


interface PersonPhone {
  //index: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface IChatThing  {
  id: number;
  userName?: string;
  title?: string;
  body?: string;
}
