import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('Debasish');

  videoEmit = new ReplaySubject<string>(3, 3000);

  asyncVedioEmit = new AsyncSubject();

  constructor() { }

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }
}
