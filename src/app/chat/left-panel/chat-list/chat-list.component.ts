import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  chatList = [];

  constructor(
    private dbService: DbService,
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chatService.userSearch$.subscribe((res) => {
      if (res.length) {
        this.mapUsers(res);
      } else {
        this.dbService
          .getRoomsForUser(this.authService.userInfo.id)
          .subscribe((res) => {
            this.mapUsers(res);
          });
      }
    });
  }

  mapUsers(res) {
    this.chatList = [];
    res.forEach((i: any) => {
      this.dbService.getUser(i.id).subscribe((res) => {
        this.chatList.push({
          chat: {},
          user: res[0],
        });
      });
    });
  }

  onSelectChat(chat) {
    this.dbService
      .getRoom(this.authService.userInfo.id, chat.user.id)
      .subscribe((res: any) => {
        console.log(res);
        if (res.length === 0) {
          this.dbService.createRoom(this.authService.userInfo.id, chat.user.id);
        }
        this.chatService.roomId = res[0].roomId;
        this.chatService.activeUser = res[0].id;
        this.chatService.activeChat$.next(res[0]);
      });
  }
}
