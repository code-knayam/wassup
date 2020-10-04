import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { IUser } from '../shared/IUser';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;
  userInfo: IUser;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private dbService: DbService
  ) {}

  signInUser() {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((res) => {
        this.userInfo = this.mapUserDetails(res.additionalUserInfo.profile);
        if (res.additionalUserInfo.isNewUser) {
          this.dbService.addNewUser(this.userInfo);
        }
        this.authenticated = true;
        // this.dbService.
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  mapUserDetails(resp) {
    return {
      email: resp.email,
      id: resp.id,
      name: resp.name,
      picture: resp.picture,
    };
  }
}
