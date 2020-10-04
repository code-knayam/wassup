import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  msgForm;

  constructor(
    private dbService: DbService,
    private fb: FormBuilder,
    private authService: AuthService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.msgForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  sendMessage(val) {
    const payload = {
      userId: this.authService.userInfo.id,
      text: val.message,
      timestamp: new Date().toDateString(),
    };
    this.chatService.pushChat(payload);
    this.msgForm.reset();
  }
}
