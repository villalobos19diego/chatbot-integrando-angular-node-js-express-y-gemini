import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }
   private apiUrl = 'http://localhost:3000/api/chat';

   sendMessage(userInput:string):Observable<{text:string}>{   

    return this.http.post<{text:string}>(this.apiUrl,{userInput});
   }
}
