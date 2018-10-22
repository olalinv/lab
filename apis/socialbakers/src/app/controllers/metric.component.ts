import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-metric',
  templateUrl: '../views/metric.component.html',
  styleUrls: ['../views/metric.component.css'],
  providers: [RequestsService]
})
export class MetricComponent implements OnInit {

  public profileId;
  public metricsCurrentMonth;
  public metricsOneDay;
  public selectedDay;
  public dateChartData;
  @ViewChild('commentsCountChartCanvas') commentsCountChartCanvas: ElementRef;
  public commentsCountChart;
  public commentsCountChartData;
  @ViewChild('followersChangeChartCanvas') followersChangeChartCanvas: ElementRef;
  public followersChangeChart;
  public followersChangeChartData;
  @ViewChild('followersCountLifetimeChartCanvas') followersCountLifetimeChartCanvas: ElementRef;
  public followersCountLifetimeChart;
  public followersCountLifetimeChartData;
  @ViewChild('followingCountLifetimeChartCanvas') followingCountLifetimeChartCanvas: ElementRef;
  public followingCountLifetimeChart;
  public followingCountLifetimeChartData;

  constructor(
    private _requestsService: RequestsService,
    private _route: ActivatedRoute
  ) {
    this.profileId = [];
    this.dateChartData = [];
    this.commentsCountChart = [];
    this.commentsCountChartData = [];
    this.followersChangeChart = [];
    this.followersChangeChartData = [];
    this.followersCountLifetimeChart = [];
    this.followersCountLifetimeChartData = [];
    this.followingCountLifetimeChart = [];
    this.followingCountLifetimeChartData = [];
  }

  ngOnInit() {
    this.selectedDay = new DateFormatPipe().transform(new Date());
    // chart: any;
    this._route.params.forEach((params: Params) => {
      // console.log(params);
      if (params['profileId']) {
        this.profileId.push(params['profileId']);
      }
    });
    this.getMetricsCurrentMonth();
    this.getMetricsOneDay();
  }

  // GET metrics of the current month
  getMetricsCurrentMonth() {
    this._requestsService.getMetricsCurrentMonth(this.profileId)
      .subscribe((data: any) => {
        this.metricsCurrentMonth = data.profiles;
        // console.log('metricsCurrentMonth: ', data.profiles);
        const items = data.profiles[0].data;
        items.forEach(item => {
          this.dateChartData.push(item.date);
          this.commentsCountChartData.push(item.comments_count);
          this.followersChangeChartData.push(item.followers_change);
          this.followersCountLifetimeChartData.push(item.followers_count_lifetime);
          this.followingCountLifetimeChartData.push(item.following_count_lifetime);
        });
        this.commentsCountChart.update();
        this.followersChangeChart.update();
        this.followersCountLifetimeChart.update();
        this.followersCountLifetimeChart.update();
        this.followingCountLifetimeChart.update();
      });
    // Create Charts
    const options = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D MMM'
            },
            tooltipFormat: 'DD/MM/YYYY'
          }
        }]
      }
    };
    // Comments count chart
    this.commentsCountChart = new Chart(this.commentsCountChartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dateChartData,
        datasets: [
          {
            data: this.commentsCountChartData,
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: options
    });
    // Followers change chart
    this.followersChangeChart = new Chart(this.followersChangeChartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dateChartData,
        datasets: [
          {
            data: this.followersChangeChartData,
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: options
    });
    // Followers count lifetime chart
    this.followersCountLifetimeChart = new Chart(this.followersCountLifetimeChartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dateChartData,
        datasets: [
          {
            data: this.followersCountLifetimeChartData,
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: options
    });
    // Following count lifetime chart
    this.followingCountLifetimeChart = new Chart(this.followingCountLifetimeChartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.dateChartData,
        datasets: [
          {
            data: this.followingCountLifetimeChartData,
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: options
    });
  }

  // GET metrics of one day
  getMetricsOneDay() {
    this._requestsService.getMetricsOneDay(this.profileId, this.selectedDay)
      .subscribe((data: any) => {
        this.metricsOneDay = data.profiles[0].data;
        // console.log('metricsOneDay: ', data);
      });
  }

}
