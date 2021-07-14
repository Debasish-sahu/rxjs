import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  users = [
    { name: 'abc', age: 5 },
    { name: 'def', age: 3 },
    { name: 'ghi', age: 10 }
  ]
  constructor() { }

  sourceSub: Subscription;
  ngOnInit(): void {
    const source = interval(1000);

    this.sourceSub = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      console.log(res);
      // if (res >= 8) {
      //   this.sourceSub.unsubscribe();
      // }
    })


    //Ex 2

    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe(res => {
      console.log(res);
    })


    //Ex 3

    const source3 = of('a', 'b', 'c');

    source3.pipe(toArray()).subscribe(res => {
      console.log(res);
    })

  }


}
