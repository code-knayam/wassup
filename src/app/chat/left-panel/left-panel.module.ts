import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { ChatListComponent } from './chat-list/chat-list.component';

@NgModule({
  declarations: [LeftPanelComponent, MenuComponent, SearchComponent, ChatListComponent],
  imports: [CommonModule],
  exports: [LeftPanelComponent],
})
export class LeftPanelModule {}
