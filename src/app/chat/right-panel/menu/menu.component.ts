import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/IUser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input('user') user: IUser;

  constructor() {}

  ngOnInit(): void {}
}
