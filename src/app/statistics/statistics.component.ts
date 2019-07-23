import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { PlayersService } from '../services/players.service';
import { IPlayer } from '../models/player.model';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { IStat } from '../models/stats.model';
import { StatisticsService } from '../services/statistics.service';
import { CustomChartOptions } from './chart.options';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  providers: [CustomChartOptions]
})
export class StatisticsComponent implements OnInit, OnDestroy {
  public winnersChartLabels: Label[] = [];
  public winnersChartData: number[] = [];
  public timesPlayedChartLabels: Label[] = [];
  public timesPlayedChartData: number[] = [];
  public finalThreeChartLabels: Label[] = [];
  public finalThreeChartData: number[] = [];
  public favoriteVotesChartLabels: Label[] = [];
  public favoriteVotesChartData: number[] = [];
  public stats: IStat[];
  public players: IPlayer[];
  public isLoading: boolean;
  private destroy = new Subject<any>();

  constructor(private playersService: PlayersService,
              private statisticsService: StatisticsService,
              public customOptions: CustomChartOptions) { }

  ngOnInit() {
    this.playersService.getPlayers().pipe(
      takeUntil(this.destroy)
    ).subscribe((players: IPlayer[]) => {
      this.players = players;
      this.mapChartData();
      this.isLoading = false;
    });

    this.statisticsService.getStatistics().pipe(
      takeUntil(this.destroy)
    ).subscribe(stats => this.stats = stats);
  }

  mapChartData() {
    this.winnersChartLabels = this.players.map((player: IPlayer) => player.fullName);
    this.winnersChartData = this.players.map((player: IPlayer) => player.wins);

    this.timesPlayedChartLabels = this.players.map((player: IPlayer) => player.fullName);
    this.timesPlayedChartData = this.players.map((player: IPlayer) => player.yearsPlayed ? player.yearsPlayed.length : 0);

    this.finalThreeChartLabels = this.players.map((player: IPlayer) => player.fullName);
    this.finalThreeChartData = this.players.map((player: IPlayer) => player.timesInFinalThree);

    this.favoriteVotesChartLabels = this.players.map((player: IPlayer) => player.fullName);
    this.favoriteVotesChartData = this.players.map((player: IPlayer) => player.favoriteVotes ? player.favoriteVotes : 0);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
