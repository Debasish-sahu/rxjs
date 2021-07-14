import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { search } from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://my-json-server.typicode.com/Debasish-sahu/switchmapappdata/data';

  // url = 'https://www.npoint.io/docs/6f3ca4c669e880a1db57';

  constructor(private http: HttpClient) { }

  getSearches(searchTerm): Observable<search> {
    // var res = this.http.get(this.url);
    return this.http.get<search>(this.url + '?q=' + searchTerm);
  }
}
