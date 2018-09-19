import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [RequestsService]
})
export class RequestComponent implements OnInit {

  constructor(
    private _requestsService: RequestsService
  ) { }

  ngOnInit() {
    console.log(this._requestsService.sayHello());
  }

}
