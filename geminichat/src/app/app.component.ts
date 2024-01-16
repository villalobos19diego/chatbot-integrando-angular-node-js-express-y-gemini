import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  userInput='';
  responses:string[] = [];
  show=false;

 
  constructor(private chatService: ChatService){}

 sendMessage(){
  this.show=true;
  this.chatService.sendMessage(this.userInput).subscribe({

    next:(res) => {
      this.responses.push(res.text);
      this.show=false;
    this.userInput = '';



    },
    error:(err) =>{

      console.error('error al enviar el mensaje',err);


    }

  })

 }

 limpiar(){

  this.responses = [];
  this.userInput = '';
  
 }


}
