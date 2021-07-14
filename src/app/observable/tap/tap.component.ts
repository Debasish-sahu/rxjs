import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  pgColor: string = '';
  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {

    const source = interval(1000);

    // Ex - 01

    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];


    let obsSubscription: Subscription;

    obsSubscription = source.pipe(
      tap(res => {
        console.log('Before map tap => ' + res);
        if (res == 6)
          obsSubscription.unsubscribe();
      }),
      map(res =>
        arr[res] + res),
      tap(res => {
        console.log('After map tap => ' + res);
      })
    ).subscribe(res => {
      console.log(res);
      this._du.print(res, 'el');
    })


    // Ex - 02

    const colors = ['red', 'green', 'blue', 'purple', 'black', 'brown', 'yellow', 'violet', 'skyblue', 'magenta'];


    let obsSubscription2: Subscription;

    obsSubscription2 = source.pipe(
      tap(res => {
        this.pgColor = colors[res];
        console.log('tap => ' + res);
        if (res == 9)
          obsSubscription2.unsubscribe();
      }),
      map(res =>
        colors[res])
    ).subscribe(res => {
      console.log(res);
      this._du.print(res, 'el2');
    })
  }

}
