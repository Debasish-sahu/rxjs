import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { pluck, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.scss']
})
export class ZipForkjoinComponent implements OnInit, AfterViewInit {

  //Sources
  nameSource = ["Ahbjh", "Bacsca", "Cefber", "Dntynt", "Exczv", "Fwefwf"];

  colorSource = ['red', 'green', 'yellow', 'violet', 'purple', 'pink'];


  //Template References
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      take(4)
    )

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map(event => event.target.value),
      take(3)
    )

    //Ex - 01 | Zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'el');
    })

    //Ex - 01 | forkjoin
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
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
