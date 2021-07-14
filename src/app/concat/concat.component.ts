import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _service: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(
      map(v => 'Tech Video #' + v),
      take(5)
    );
    const sourceComedy = interval(1000).pipe(
      map(v => 'Comedy Video #' + v),
      take(3)
    );
    const sourceNews = interval(1000).pipe(
      map(v => 'News Video #' + v),
      take(4)
    );

    const finObs = concat(sourceTech, sourceComedy, sourceNews);

    finObs.subscribe(res => {
      console.log(res);
      this._service.print(res, 'el');
    })
  }

}
