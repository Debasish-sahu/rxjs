import { Component, OnInit } from '@angular/core';
import { interval, concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(500).pipe(
      map(v => 'Tech Video #' + v),
      take(5)
    );
    const sourceComedy = interval(200).pipe(
      map(v => 'Comedy Video #' + v),
      take(3)
    );
    const sourceNews = interval(100).pipe(
      map(v => 'News Video #' + v),
      take(4)
    );

    const finObs = merge(sourceTech, sourceComedy, sourceNews);

    finObs.subscribe(res => {
      console.log(res);
      this._service.print(res, 'el');
    })
  }

}
