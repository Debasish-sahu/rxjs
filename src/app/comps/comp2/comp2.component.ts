import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  // userName: string = "Debasish";
  userName: string

  constructor(private _service: DesignUtilityService) {
    this._service.userName.subscribe(res => this.userName = res)
  }

  ngOnInit(): void {
  }

  onChange(uname) {
    console.log(uname);
    this._service.userName.next(uname);
  }

}
