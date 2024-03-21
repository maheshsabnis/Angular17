import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {
  private url:string = '';
  constructor(private http: HttpClient) {
    this.url = "https://catprdapi.azurewebsites.net";
  }

   // Observable<T> is return type and T is expected response
   getData(): Observable<Category[]> {
    let resp: Observable<Category[]>;
    resp =  this.http.get<Category[]>(`${this.url}/api/category`);
    return resp;
  }

  postData(prd: Category): Observable<Category> {
    let resp: Observable<Category>;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    resp = this.http.post<Category>(`${this.url}/api/category`, prd, options);
    return resp;
  }

  putData(id: number, prd: Category): Observable<Category> {
    let resp: Observable<Category>;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    resp = this.http.put<Category>(`${this.url}/api/category/${id}`, prd, options);
    return resp;
  }

  deleteData(id: number): Observable<boolean>{
    let resp: Observable<boolean>;
    resp = this.http.delete<boolean>(`${this.url}/api/category/${id}`);
    return resp;
  }
}
