import { IPlayer } from './../models/player.model';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: IPlayer;
  playerId: string;
  questions: [
    'Kurią vietą užėmei praeitame sezone?',
    'Apibūdink save trimis žodžiais',
    'Mėgstamiausias žaidėjas iš praėjusių sezonų',
    'Jei galėtum pasiimti tik tris dalykus į Jurgio sodybą, kas tai būtų?',
    'Kaip manai, kodėl būtent tu šiais metais turėtum nugalėti?'
  ];

  constructor(private _players: PlayersService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.playerId = this._route.snapshot.params.playerId;
    this.getPlayer(this.playerId);
  }

  private getPlayer(playerId: string) {
    this._players.getPlayer(playerId).subscribe(data => {
      this.player = data;
      console.log(this.player);
    });
  }

}
