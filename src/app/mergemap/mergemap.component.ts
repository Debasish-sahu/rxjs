import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  getData(data) {
    return of(data + ' Video Uploaded');
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


    // Ex - 02 | Map + MergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el2');
    })


    // Ex - 03 | MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
      this._service.print(res, 'el3');
    })
  }

}
