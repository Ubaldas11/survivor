import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

export interface ITagManagerEvent {
  event: string;
}

@Injectable()
export class TagManagerService {

  private dataLayer: any;

  constructor(private authService: AuthService) {
    this.dataLayer = (<any> window).dataLayer || [];
  }

  initialize() {
    const isLoggedIn = this.authService.isAuthenticated();
    this.dataLayer.push({
      isLoggedIn
    });

    this.dataLayer.push({
      event: 'gtm.historyChange',
      'gtm.historyChangeSource': 'pushState'
    });
  }

  tagEvent(event: ITagManagerEvent) {
    this.dataLayer.push(event);
  }
}

