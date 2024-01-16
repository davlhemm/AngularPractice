import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
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
        console.log(message);
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
  }
}

interface PersonPhone {
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
