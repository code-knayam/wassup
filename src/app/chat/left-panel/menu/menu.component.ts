import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/shared/IUser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user: IUser;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.userInfo;
  }
}
