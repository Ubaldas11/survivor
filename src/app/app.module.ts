import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { MatVideoModule } from 'mat-video';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { firebaseConfig } from '../environments/firebase-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FileService } from './services/file.service';
import { WinnersComponent } from './winners/winners.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { HintsComponent } from './hints/hints.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    WinnersComponent,
    GalleryComponent,
    PlayersComponent,
    PlayerComponent,
    HintsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatVideoModule,
    AngularFirestoreModule,
    MatCardModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
