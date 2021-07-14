import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus2;
  names;
  nameStatus;
  sub2: Subscription;
  constructor(private _service: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex- 01 (Manual)

    const cusObs1 = Observable.create(observer => {

      setTimeout(() => {
        observer.next('Angular')
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript')
      }, 2000);

      setTimeout(() => {
        observer.next('HTML & CSS');
        // observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next('Javascript');
        // this.techStatus = "error";
        // observer.error(new Error('Limit exceed'));
      }, 4000);

      setTimeout(() => {
        observer.next('JQuery');
        observer.complete();
        // this.techStatus = "complete";
      }, 5000);

      // observer.error()
      // observer.complete()
    });

    cusObs1.subscribe(res => {
      this._service.print(res, "elContainer");
      // console.log(res);
    },
      (err) => {
        this.techStatus = "error";
      },
      () => {
        this.techStatus = "complete";
      })



    // Ex - 02 (Custom Interval)

    const Arr2 = ['Angular', 'Javascript', 'Html', 'CSS', 'Typesccript'];
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        count++;

        if (count > 4) {
          observer.error('Error Emit');
        }

        if (count > 7) {
          observer.complete();
        }
      }, 1000)
    })

    this.sub2 = cusObs2.subscribe(res => {
      // console.log(res);
      this._service.print(res, 'elContainer2');
    },
      (err) => {
        this.techStatus2 = "error";
      },
      () => {
        this.techStatus2 = "complete";
      }
    )


    // Ex - 03 (Random Names)

    const Arr3 = ['Anup', 'Shekhar', 'Uxtrendz', 'John', 'Alex', 'Robert'];
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);
        count++;

        if (count > 3) {
          observer.error('Error Emit');
        }

        if (count > 5) {
          observer.complete();
        }
      }, 1000)
    })

    cusObs3.subscribe(res => {
      console.log(res);
      this.names = res;
    },
      (err) => {
        this.nameStatus = "error";
      },
      () => {
        this.nameStatus = "complete";
      })

  }

  ngOnDestroy() {
    this.sub2.unsubscribe();
  }

}
