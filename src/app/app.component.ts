import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuestionsForm';

  ngOnInit() {
    //console.log(Promise.resolve(123));
  }

}

async function getData() {
  return await Promise.resolve('Hello!');
}

