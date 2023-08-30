import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpGetService {
  constructor(private http: HttpClient) {}

  fetchDataFromAPI(url: string): Observable<any> {
    return this.http.get(url);
  }
}
