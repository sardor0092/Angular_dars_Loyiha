import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DarsService {

  constructor(private http:HttpClient) { }

  getTodo(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
  }

  getTodoById(id:number){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
 




}
