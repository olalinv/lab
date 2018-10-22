import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private host: string;
  private token: string;
  private secret: string;
  private authData: string;
  private profilesUrl: string;
  public profiles: Array<Object>;
  private metricsUrl: string;
  public metrics: Array<Object>;

  constructor(private http: HttpClient) {
    this.host = 'https://api.socialbakers.com';
    this.token = 'MzQxMzc1XzE0OTYyOTBfMTg0NTQ2MDY1MjA4N182ZjBhNWJlZjZiMTMxOWFjZTVjMGQ3ZjBiNWY0NGI4Yg==';
    this.secret = 'bb9eb8a1f0dbdfba8a8b0e6b39f9f16c';
    this.authData = window.btoa(this.token + ':' + this.secret);
    this.profilesUrl = this.host + '/0/instagram/profiles';
    this.metricsUrl = this.host + '/0/instagram/metrics';
    this.profiles = [];
  }

  getProfiles() {
    // Add headers
    // TODO: Add an HTTP interceptor to handle auth
    const headers = new HttpHeaders({
      'Authorization': `Basic ${this.authData}`
    });
    // Transform response to json object
    return this.http.get(this.profilesUrl, {headers: headers});
  }

  getMetricsCurrentMonth(profileId) {
    // Add headers
    // TODO: Add an HTTP interceptor to handle auth
    const headers = new HttpHeaders({
      'Authorization': `Basic ${this.authData}`,
    });
    const date = new Date();
    const firstDayOfMonth = (date.getFullYear()) + '-' + (date.getMonth() + 1) + '-01';
    const today = (date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
    const options = {
      'profiles': profileId,
      'date_start': firstDayOfMonth,
      'date_end': today,
      'metrics': ['comments_count', 'followers_change', 'followers_count_lifetime', 'following_count_lifetime']
    };
    // Transform response to json object
    return this.http.post(this.metricsUrl, options, {headers: headers});
  }

  getMetricsOneDay(profileId, selectedDay) {
    // Add headers
    // TODO: Add an HTTP interceptor to handle auth
    const headers = new HttpHeaders({
      'Authorization': `Basic ${this.authData}`,
    });
    // const date = new Date();
    // const today = (date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
    const options = {
      'profiles': profileId,
      'date_start': selectedDay,
      'date_end': selectedDay,
      'metrics': ['comments_count', 'followers_change', 'followers_count_lifetime', 'following_count_lifetime']
    };
    // Transform response to json object
    return this.http.post(this.metricsUrl, options, {headers: headers});
  }

}
