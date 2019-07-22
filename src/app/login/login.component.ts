import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, Validators, Form} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;
  public error: string;
  public emailFormControl: FormControl;
  public passwordFormControl: FormControl;
  private destroy: Subject<void> = new Subject();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initControls();
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.authStatusChanged.pipe(
      takeUntil(this.destroy)
    ).subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  initControls(): void {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordFormControl = new FormControl('', [
      Validators.required,
    ]);
  }

  onSubmit(): void {
    this.error = '';
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.authService.login({ username: this.emailFormControl.value, password: this.passwordFormControl.value})
      .then(() => {
          this.router.navigate(['home']);
      }).catch(() => {
        this.error = 'Nepaėjo prisijungti. Bandyk vėl';
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
