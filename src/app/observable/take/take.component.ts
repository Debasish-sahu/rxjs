import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  randomNames = ['Astaroth', 'Jorgen', 'Satori', 'Galahad', 'Jhu', 'Cleaver',
    'Phobos'];

  ngOnInit(): void {

    const nameSource = from(this.randomNames);

    // Ex - 01 | Take

    nameSource.pipe(
      take(5)
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el1');
    })

    // Ex - 02 | TakeLast

    nameSource.pipe(
      takeLast(5)
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el2');
    })

    // Ex - 03 | TakeUntil

    const source = interval(1000);

    let condition1 = timer(5000);

    let condition2 = fromEvent(document, 'click');

    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition1)
    ).subscribe(res => {
      this._service.print(res, 'el3');
    })

    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    ).subscribe(res => {
      this._service.print(res, 'el4');
    })
  }

}
