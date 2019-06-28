import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {

  constructor(
    private http: HttpClient
  ) { }

  public createTask(newTask: any): Observable<any>{
    return this.http.post("http://www.mocky.io/v2/5d1562250e00005700a112c3",newTask)
  }
}
