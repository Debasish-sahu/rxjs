import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private _designUtility: DesignUtilityService) { }

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      // console.log('Video ' + count++);
      let val = "Video" + count++;
      this._designUtility.print(val, 'elContainer');
      this._designUtility.print(val, 'elContainer2');
      // this.print(count++, 'elContainer');
    })
  }



}
