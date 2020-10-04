import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
})
export class RightPanelComponent implements OnInit {
  activeChat = { user: {} };
  showError = true;

  constructor(private dbService: DbService, private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.activeChat$.subscribe((res) => {
      if (res?.id) {
        this.showError = false;
        this.dbService.getUser(res.id).subscribe((res) => {
          this.activeChat.user = res[0];
        });
      } else {
        this.showError = true;
      }
    });
  }
}
