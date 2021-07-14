import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }
  asyncVedioEmit;
  ngOnInit(): void {
    this._service.asyncVedioEmit.subscribe(res => {
      this.asyncVedioEmit = res;
    })
  }

  onVideoAdd(video) {
    console.log(video);
    this._service.asyncVedioEmit.next(video);
  }

  onComplete() {
    this._service.asyncVedioEmit.complete();
  }

}
