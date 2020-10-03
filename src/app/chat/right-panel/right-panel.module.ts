import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPanelComponent } from './right-panel.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { MessageComponent } from './chat-window/message/message.component';

@NgModule({
  declarations: [RightPanelComponent, ChatWindowComponent, MenuComponent, ChatInputComponent, MessageComponent],
  imports: [CommonModule, MatIconModule],
  exports: [RightPanelComponent],
})
export class RightPanelModule {}
