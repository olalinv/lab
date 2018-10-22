import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-profile',
  templateUrl: '../views/profile.component.html',
  styleUrls: ['../views/profile.component.css'],
  providers: [RequestsService]
})
export class ProfileComponent implements OnInit {

  public profiles;

  constructor(
    private _requestsService: RequestsService
  ) {}

  ngOnInit() {
    this.getProfiles();
  }

  // GET profiles
  getProfiles() {
    this._requestsService.getProfiles()
      .subscribe((data: any) => {
        this.profiles = data.profiles;
        // console.log('profiles: ', data);
      });
  }
}
