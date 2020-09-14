import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { LeftPanelModule } from './left-panel/left-panel.module';
import { RightPanelModule } from './right-panel/right-panel.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, ChatRoutingModule, LeftPanelModule, RightPanelModule],
})
export class ChatModule {}
