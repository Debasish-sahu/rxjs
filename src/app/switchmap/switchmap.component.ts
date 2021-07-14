import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeAll, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);


    // Ex - 01 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el1');
    })


    // Ex - 02 | ConcatMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el2');
    })


    // Ex - 03 | SwitchMap
    source.pipe(
      switchMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el3');
    })


    // Ex - 04 | Map
    source.pipe(
      map(data => this.getData(data))
    ).subscribe(res => res.subscribe(res2 => {
      console.log(res2);
      this._service.print(res2, 'el4');
    }));


    // Ex - 05 | Map + SwitchAll
    source.pipe(
      map(res => this.getData(res)),
      switchAll()
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el5');
    })
  }

}
