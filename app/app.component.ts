import {Component} from 'angular2/core';

import {Adie} from './models/adie';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<h2>{{ sampleStudent.name }}</h2>
	<p>Cohort: {{sampleStudent.cohort}}</p>
	<img [src]="sampleStudent.image">
	<input [(ngModel)]="sampleStudent.name" placeholder="name">
	`
})
export class AppComponent {
	public title = "Capstone Practice App";
	public sampleStudent: Adie = {
    "id": 19,
    "name": "Linnea Damer",
    "cohort": 2,
    "twitter": "",
    "linked_in": "https://www.linkedin.com/in/linnea-damer-5897322b",
    "image": "images/Linnea.jpg",
    "email": "lkdamer@gmail.com",
    "current_employer": null,
    "intern_company_id": 7,
    "bio": "Linnea Damer was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
  };

}