import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  selectToggle = 0;
  obsMsg;
  videoSubscription: Subscription;
  audioSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const broadCastVideo = interval(500);
    const broadCastAudio = timer(5000, 500);

    this.videoSubscription = broadCastVideo.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer3');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })

    this.audioSubscription = broadCastAudio.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' + res;
      this._designUtility.print(this.obsMsg, 'elContainer2');
      this._designUtility.print(this.obsMsg, 'elContainer3');
      if (res >= 5) {
        this.audioSubscription.unsubscribe();
      }
    })

  }


}
