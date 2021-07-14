import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient, private _service: DesignUtilityService) { }
  fetching = false;
  num = 0;

  @ViewChild('btn') btn: ElementRef;

  // url = 'https://my-json-server.typicode.com/Debasish-sahu/exhaustMapForRxjs/response';
  url = 'https://rxjs-exhaustmap-default-rtdb.firebaseio.com/';
  saveRequest;

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => console.log(res));
  }

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      tap(() => this.fetching = true),
      exhaustMap(() => this.onSave(this.num++))
    )
      .subscribe(res => {
        console.log(res);
        this.onFetch();
        this.fetching = false;
      })
  }

  onSave(changes) {
    return this.http.put(this.url, { data: changes });
  }

  onFetch() {
    this.http.get<any>(this.url).subscribe(res => {
      console.log(res.data);
      this.saveRequest = res.data;
    })
  }

}
