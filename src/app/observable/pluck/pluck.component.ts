import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }

  users = [
    {
      name: 'Deva',
      skills: 'Angular',
      job: {
        title: 'UI',
        exp: '6 Years'
      }
    },
    {
      name: 'Jyoti',
      skills: 'Oracle',
      job: {
        title: 'DB',
        exp: '6 Years'
      }
    },
    {
      name: 'Raftaar',
      skills: 'Fullstack',
      job: {
        title: 'UI',
        exp: '5 Years'
      }
    },
    {
      name: 'Beejit',
      skills: 'Log',
      job: {
        title: 'System',
        exp: '5 Years'
      }
    }
  ]

  data;
  data2;

  ngOnInit(): void {


    //Ex - 1
    from(this.users).pipe(
      // map(data => data.name),
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data2 = res;
    })


    //Ex - 2
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.data = res;
    })




  }

}
