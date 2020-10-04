import { Injectable } from '@angular/core';
import { IUser } from '../shared/IUser';
import { AngularFireDatabase } from '@angular/fire/database';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private db: AngularFireDatabase) {}

  addNewUser(user: IUser) {
    this.db.list('users').push(user);
  }

  getMessagesFromRoom(roomId) {
    return this.db.list('rooms/' + roomId).valueChanges();
  }

  pushChat(payload, roomId) {
    this.db.list('rooms/' + roomId).push(payload);
  }

  getUsers() {
    return this.db.list('users').valueChanges();
  }

  getUser(id) {
    return this.db
      .list('users', (ref) => ref.orderByChild('id').equalTo(id))
      .valueChanges();
  }

  getRoomsForUser(id) {
    return this.db.list('room-list/' + id).valueChanges();
  }

  getRoom(activeUserId, selectedUserId) {
    return this.db
      .list('room-list/' + activeUserId, (ref) =>
        ref.orderByChild('id').equalTo(selectedUserId)
      )
      .valueChanges();
  }

  createRoom(activeUserId, selectedUserId) {
    const roomId = uuid.v4();

    this.db.list('room-list/' + activeUserId).push({
      id: selectedUserId,
      roomId: roomId,
    });
    this.db.list('room-list/' + selectedUserId).push({
      id: activeUserId,
      roomId: roomId,
    });
  }

  searchUser(query) {
    return this.db
      .list('users', (ref) =>
        ref.orderByChild('email').startAt(query).limitToFirst(10)
      )
      .valueChanges();
  }
}
