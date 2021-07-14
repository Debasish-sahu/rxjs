import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      console.log(res2);
      this._service.print(res2, 'el1');
    }))


    // Ex - 02 | Map + concatAll
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el2');
    })

    // Ex - 03 | concatMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el3');
    })

    // Ex - 04 | mergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el4');
    })

  }



}
