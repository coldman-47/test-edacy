import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  @ViewChild('image') image: any;

  getFile(input: any, e: any){
    e.preventDefault();
    console.log(e.target);
    
  }

  test(e: any){
    console.log(e);
    
    alert()
  }
}
