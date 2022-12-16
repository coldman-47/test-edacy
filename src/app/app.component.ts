import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  @ViewChild('image') image: any;
  programForm: any;

  constructor(fb: FormBuilder){
    this.programForm = fb.group({
      title: [null, Validators.required],
      lang: [null, Validators.required],
      level: [null, Validators.required],
      type: [null, Validators.required],
      desc: [null, Validators.required],
      objectives: [null, Validators.required],
      duration: [null, Validators.required],
      hours: [null, Validators.required],
      prequisite: [null, Validators.required],
      certification: [null, Validators.required],
      start: [null, Validators.required]
    })
  }

  getFile(input: any, e: any){
    e.preventDefault();
    console.log(e.target);
  }
}
