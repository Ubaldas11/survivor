import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnersComponent } from './winners/winners.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // further routes to be added
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'winners', component: WinnersComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'player/:playerId', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
