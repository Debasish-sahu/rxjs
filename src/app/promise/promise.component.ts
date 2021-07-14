import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  promiseVal;

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  };

  hp = {
    brand: 'Hp',
    hardDisk: '1.5 TB',
    color: 'Silver'
  };

  dellAvailable() {
    // return true;
    return setTimeout(() => true, 2000);
  }

  hpAvailable() {
    // return true;
    return setTimeout(() => true, 1000);
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is rejected');
      if (this.dellAvailable()) {
        resolve(this.dell);
        // setTimeout(() => resolve(this.dell), 2000);
      }
      else if (this.hpAvailable()) {
        resolve(this.hp);
        // setTimeout(() => resolve(this.hp), 1000);
      }
      else
        setTimeout(() => reject('Laptop not available'), 3000);
    });

    buyLaptop.then(res => {
      console.log('success => ', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('reject => ', res);
      this.promiseVal = res;
    })
  }

  myFunction() {
    console.log('myFunction called');
  }

}
