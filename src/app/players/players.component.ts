import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { IPlayer } from '../models';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  currentPlayers: Array<IPlayer>;
  pastPlayers: Array<IPlayer>;
  today: Date = new Date();
  
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  private getAllPlayers() {
    this.playersService.getPlayers().subscribe(players => {
      this.currentPlayers = players.filter(x => x.current);
      this.pastPlayers = players.filter(x => !x.current);
    });
  }

  public isBirthday(player: IPlayer) {
      const birthDate = new Date(player.birthdate.seconds * 1000);
      return birthDate.getDate() === this.today.getDate() && birthDate.getMonth() === this.today.getMonth();
    }
}
