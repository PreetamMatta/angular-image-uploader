import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpPutService {
  constructor(private http: HttpClient) {}

  uploadImageToAPI(url: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.put(url, formData);
  }
}
