import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { IPlayer } from '../models';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Array<IPlayer>;

  constructor(private _players: PlayersService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  private getAllPlayers() {
    this._players.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

}
