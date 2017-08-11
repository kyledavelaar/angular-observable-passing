import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  sendMessage(): void {
    //send message to subscribers via observable subject
    this.messageService.sendMessage('message from home to app component')
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }


  ngOnInit() {
  }

}
