import { IPlayer } from './../models/player.model';
import { PlayersService } from './../services/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {
  public today = new Date();
  constructor(private _players: PlayersService) {
   }

  ngOnInit() {
  }
}
