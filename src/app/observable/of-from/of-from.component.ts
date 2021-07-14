import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg;
  constructor(private _designService: DesignUtilityService) { }

  ngOnInit(): void {
    const obs1 = of('Ram', 'Hari', 'Shyam');

    obs1.subscribe(res => {
      this._designService.print(res, 'elContainer');
    })

    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });

    obs2.subscribe(res => {
      this.obsMsg = res;
      // this._designService.print(res, 'elContainer');
    })


    //from -array
    const obs3 = from(['Brett', 'Dwane', 'Kevin']);

    obs3.subscribe(res => {
      this._designService.print(res, 'elContainer3');
    })

    //from -promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })

    promise.then(res => console.log(res));

    const obs4 = from(promise);
    obs4.subscribe(res => {
      this._designService.print(res, 'elContainer4');
    })

    //from - string
    const obs5 = from('What is it you Desire!!!');
    obs5.subscribe(res => {
      this._designService.print(res, 'elContainer5');
    })
  }



}
