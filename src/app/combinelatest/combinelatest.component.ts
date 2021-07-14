import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements AfterViewInit {

  //Sources
  nameSource = ["Ahbjh", "Bacsca", "Cefber", "Dntynt", "Exczv", "Fwefwf"];

  colorSource = ['red', 'green', 'yellow', 'violet', 'purple', 'pink'];


  //Template References
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    //Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      pluck('target', 'value')
    )

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value)
    )

    //Ex - 01 | CombineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'el');
    })

    //Ex - 01 | withLatestFrom

    //Master - nameObs, Slave - colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'el2');
    })
  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("style", 'background-color:' + color);
    document.getElementById(containerId).appendChild(el);
  }

}
