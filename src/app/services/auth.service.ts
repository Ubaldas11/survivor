import {Injectable} from '@angular/core';
import {ILogin} from '../models/login.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {Subject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public authStatusChanged: Subject<boolean> = new Subject();
  private user: User;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.authStatusChanged.next(true);
      } else {
        this.user = null;
        localStorage.setItem('user', null);
        this.authStatusChanged.next(false);
      }
    });
  }

  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public login(credentials: ILogin): Promise<UserCredential> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(credentials.username, credentials.password);
  }

  public async logout(): Promise<void> {
    await this.firebaseAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  public isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }
}
