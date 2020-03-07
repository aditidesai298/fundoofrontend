import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from '../../app/services/http-service.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})

export class NoteserviceService {


  constructor(private _http: HttpClient, private httpservice: HttpService) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json', token:localStorage.getItem('token') })
  };

  public createNote(note:Note):Observable<any>{
    console.log("noteee"+note);
    
    
    return this.httpservice.post('http://localhost:8085/note/create ', note, this.httpOptions)
  }
}
