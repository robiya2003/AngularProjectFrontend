import { Injectable } from '@angular/core';
import { GetAll } from '../models/get-all';
import { CreateUser } from '../models/create-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseurl:string="https://localhost:7153/api/Users/";
    constructor(private http:HttpClient) { }
    
    getAll(): Observable<GetAll[]> {
      return this.http.get<GetAll[]>(this.baseurl+"GetUsers");
    }
    create(data:any):Observable<any>{
      return this.http.post<any>(this.baseurl+"PostUsers",data)
    }
    getById(id: number): Observable<CreateUser> {
      return this.http.get<CreateUser>(this.baseurl + `GetById?id=${id}`)
    }
}
