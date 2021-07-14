import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  msg1;
  msg2;
  msg3;
  constructor(private _srevice: DesignUtilityService) { }

  ngOnInit(): void {



    const broadVd = interval(1000);

    //Ex - 01

    this.sub1 = broadVd.pipe(
      map(data => 'Video ' + data)
    ).subscribe(res => {
      console.log(res);
      this.msg1 = res;
    });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    //Ex - 02

    this.sub2 = broadVd.pipe(map(data => data * 30)).subscribe(res => {
      console.log(res);
      this.msg2 = res;
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);


    //Ex - 03

    const members = from([
      { id: 1, name: 'Deva' },
      { id: 2, name: 'Lucifer' },
      { id: 3, name: 'Munna bhaiya' },
      { id: 4, name: 'Guddu Bhaiya' },
      { id: 5, name: 'Gal' },
      { id: 6, name: 'Logan' },
      { id: 7, name: 'Thor' },
      { id: 8, name: 'Peter Parker' }
    ]);

    members.pipe(
      map(data => data.name)).subscribe(res => {
        console.log(res);
        this._srevice.print(res, 'elContainer');
      })


  }



}
