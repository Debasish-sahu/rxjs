import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { search } from '../appInterface/search.interface';
import { SearchService } from '../appServices/search.service';

@Component({
  selector: 'app-switchmapapp',
  templateUrl: './switchmapapp.component.html',
  styleUrls: ['./switchmapapp.component.scss']
})
export class SwitchmapappComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm: NgForm;

  searchResults: search;

  serachResultCount: number;

  constructor(private _searchService: SearchService) { }

  ngAfterViewInit(): void {

    // this._searchService.getSearches().subscribe(res => {
    //   console.log(res);
    // })
    const formValue = this.searchForm.valueChanges;

    formValue.pipe(
      // map(data => data.searchTerm)
      filter(() => this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._searchService.getSearches(data))
    ).subscribe(res => {
      console.log(res);
      this.searchResults = res;
      console.log(Object.keys(res).length);
      this.serachResultCount = Object.keys(res).length;
    })
  }

}
