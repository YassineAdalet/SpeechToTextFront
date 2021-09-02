import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranscriptionService } from './transcription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yasspeech';


  // text: string = "dee";


  // filePath: string;
  // file: File;
  // constructor(private ts: TranscriptionService, http: HttpClient) {
  // }


  // ConvertToText() {
  //   this.ts.ConvertSpeechToText(this.filePath).subscribe();
  // }


  // fileChange(file) {
  //   this.file = file.target.files[0];
  //   console.log(this.file.name);
  // }




}






  // public openPicture() {
  //   //for testing
  //   console.log('button clicked to open picture');

  //   var picture = browse.the.picture.and.assing.to.this.variable;

  //   //another test, see on console if picture is read
  //   console.log('%c       ', 'font-size: 100px; background: {{picture}} no-repeat;');
  // }
