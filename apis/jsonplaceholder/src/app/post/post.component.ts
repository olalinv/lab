import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [RequestsService]
})
export class PostComponent implements OnInit {

  public posts;

  constructor(
    private _requestsService: RequestsService
  ) { }

  ngOnInit() {
    this._requestsService.getPosts().subscribe(
      result => {
        this.posts = result;
        if (!this.posts) {
          this.posts = 'No results';
        }
      },
      error => {
        const err = <any>error;
        console.log(err);
      }
    )
  }

}
