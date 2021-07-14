import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  // userName: string = "Debasish";
  userName: string;
  constructor(private _service: DesignUtilityService) {
    this._service.userName.subscribe(res => this.userName = res)
  }

  ngOnInit(): void {
    this._service.exclusive.next(true);
  }

  ngOnDestroy() {
    this._service.exclusive.next(false);
  }

}
