import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { fileURLToPath } from 'url';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  filepath: string;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  options = { headers: this.headers };


  constructor(private http: HttpClient) { }



  ConvertSpeechToText(filepath: string) {
    let request = { FilePath: filepath };
    return this.http.post<string>('https://localhost:5001/weatherforecast/ConvertSpeechToText', request, this.options);
  }



}
