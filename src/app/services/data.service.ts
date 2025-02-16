import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = null;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if (this.data) {
      return new Observable((observer) => {
        observer.next(this.data);
        observer.complete();
      });
    } else {
      return this.http.get('https://api.example.com/data');
    }
  }
}
