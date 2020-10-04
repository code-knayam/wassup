import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  messageList = [];

  constructor(
    private dbService: DbService,
    private authService: AuthService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.chatService.activeChat$.subscribe((res) => {
      if (res.roomId) {
        this.dbService.getMessagesFromRoom(res.roomId).subscribe((res) => {
          console.log(res);
          this.messageList = this.mapMessage(res);
        });
      }
    });
  }

  mapMessage(res) {
    return res.map((i) => {
      i.isIncoming = i.userId !== this.authService.userInfo.id;
      return i;
    });
  }
}
