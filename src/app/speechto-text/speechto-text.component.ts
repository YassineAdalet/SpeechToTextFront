import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranscriptionService } from '../transcription.service';

@Component({
  selector: 'app-speechto-text',
  templateUrl: './speechto-text.component.html',
  styleUrls: ['./speechto-text.component.css']
})
export class SpeechtoTextComponent implements OnInit {


  constructor(private ts: TranscriptionService) { }
  filepath: string;
  text: string;

  ConvertSpeechToText() {
    this.ts.ConvertSpeechToText(this.filepath).subscribe();
  }


  ngOnInit(): void {
  }
}
