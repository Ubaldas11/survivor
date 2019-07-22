import {Injectable} from '@angular/core';
import {ILogin} from '../models/login.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {Subject} from 'rxjs';

@Injectable()
export class AuthService {
  public authStatusChanged: Subject<boolean> = new Subject();
  private user: User;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.authStatusChanged.next(true);
        this.user = user;
        console.log(user);
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.authStatusChanged.next(false);
        localStorage.setItem('user', null);
      }
    });
  }

  public login(credentials: ILogin): void {
    this.firebaseAuth.auth.signInWithEmailAndPassword(credentials.username, credentials.password).then((response: UserCredential) => {
    });
  }

  public async logout(): Promise<void> {
    await this.firebaseAuth.auth.signOut();
    localStorage.removeItem('user');
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
