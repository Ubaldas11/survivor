import { HintsComponent } from './hints/hints.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnersComponent } from './winners/winners.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PlayersComponent } from './players/players.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // further routes to be added
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]  },
  { path: 'winners', component: WinnersComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'players/:playerId', component: PlayerComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'hints', component: HintsComponent},
  { path: 'login' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
