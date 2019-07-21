import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnersComponent } from './winners/winners.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // further routes to be added
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'winners', component: WinnersComponent},
  { path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
