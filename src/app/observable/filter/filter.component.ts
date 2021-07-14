import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  datArr = [
    { id: 1, name: 'Astaroth', gender: 'Male' },
    { id: 2, name: 'Maya', gender: 'Female' },
    { id: 3, name: 'Nebula', gender: 'Female' },
    { id: 4, name: 'Aurora', gender: 'Female' },
    { id: 5, name: 'Galahad', gender: 'Male' },
    { id: 6, name: 'Ginger', gender: 'Female' },
    { id: 7, name: 'Celeste', gender: 'Female' },
    { id: 8, name: 'Peppy', gender: 'Female' },
    { id: 9, name: 'Corvus', gender: 'Male' },
    { id: 10, name: 'Karakh', gender: 'Male' },
    { id: 11, name: 'Kiera', gender: 'Female' },
    { id: 12, name: 'Thea', gender: 'Female' },
  ]

  dataLength;
  dataGender;
  dataNthItem;
  constructor() { }

  ngOnInit(): void {

    const source = from(this.datArr);


    //Ex - 01 : Filter by length

    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.dataLength = res;
    })


    //Ex - 02 : Filter by length

    source.pipe(
      filter(member => member.gender == 'Female'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.dataGender = res;
    })


    //Ex - 03 : Filter by nth item

    source.pipe(
      filter(member => member.id < 7),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.dataNthItem = res;
    })
  }

}
