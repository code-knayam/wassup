import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  activeChat$ = new BehaviorSubject<any>('');
  userSearch$ = new BehaviorSubject<any>([]);
  roomId;
  activeUser;

  constructor(private dbService: DbService) {}

  pushChat(payload) {
    this.dbService.pushChat(payload, this.roomId);
  }
}
