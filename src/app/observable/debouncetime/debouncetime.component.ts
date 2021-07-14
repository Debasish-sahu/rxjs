import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData = null;
  reqData2 = null;

  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit() {

    // Ex - 01 | debounceTime
    const serachTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    )

    serachTerm.subscribe(res => {
      console.log(res);
      this.reqData = res;

      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    })


    // Ex - 02 | DistinctUntilChanged
    const serachTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    serachTerm2.subscribe(res => {
      console.log(res);
      this.reqData2 = res;

      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    })
  }

}
