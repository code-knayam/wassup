import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatItemComponent } from './chat-list/chat-item/chat-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LeftPanelComponent,
    MenuComponent,
    SearchComponent,
    ChatListComponent,
    ChatItemComponent,
  ],
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  exports: [LeftPanelComponent],
})
export class LeftPanelModule {}
