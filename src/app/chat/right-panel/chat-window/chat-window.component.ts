import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  items;
  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('items')
      .valueChanges()
      .subscribe((res) => {
        this.items = res;
      });
  }
}
