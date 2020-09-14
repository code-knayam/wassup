import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPanelComponent } from './right-panel.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [RightPanelComponent, ChatWindowComponent, MenuComponent],
  imports: [CommonModule],
  exports: [RightPanelComponent],
})
export class RightPanelModule {}
