import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  user1List = [
  ];
  user2List = [
  ];
  user3List = [
  ];

  //subscribe modes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  //Subscrption
  subscription2: Subscription;
  subscription3: Subscription;
  intSubscription: Subscription;

  //Toggle properties
  methodInterval: boolean = false;

  ngOnInit(): void {
    this._service.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    })
  }

  onVideoAdd(video) {
    // console.log(video);
    this._service.videoEmit.next(video);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._service.videoEmit.subscribe(res => {
        this.user2List.push(res);
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._service.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  // Toggle Method
  toggleMethod() {
    const broadcastVideo = interval(1000);
    if (!this.methodInterval) {
      this.intSubscription = broadcastVideo.subscribe(res => {
        this._service.videoEmit.next('Video ' + res);
      })
    } else {
      this.intSubscription.unsubscribe();
    }

    this.methodInterval = !this.methodInterval;
  }

}
