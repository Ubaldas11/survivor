import { ChartOptions, ChartType } from 'chart.js';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomChartOptions {
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  };
  public chartType: ChartType = 'bar';
  public chartLegend = false;
  public chartColors = [
    {
      backgroundColor: [
        '#88498F',
        '#779FA1',
        '#E0CBA8',
        '#FF6542',
        '#564154',
        '#BDEDE0',
        '#7E78D2',
        '#E0CBA8',
        '#6F58C9',
        '#564154',
        '#88498F',
        '#779FA1',
        '#E0CBA8',
        '#FF6542',
        '#564154',
        '#BDEDE0',
        '#7E78D2',
        '#E0CBA8',
        '#6F58C9',
        '#564154',
        '#88498F',
        '#779FA1',
        '#E0CBA8',
        '#FF6542',
        '#564154',
        '#BDEDE0',
        '#7E78D2',
        '#E0CBA8',
        '#6F58C9',
        '#564154',
      ],
    },
  ];
}
