import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl:string = "https://api.github.com/";

  constructor(private http:HttpClient) { }

  getRepos(userName:string):Observable<any>{
    return this.http.get(this.baseUrl+ 'users/' + userName + '/repos' ,{observe:'events' , reportProgress:true})

  }


  



}
