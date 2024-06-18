import { Component } from '@angular/core';
import { repos } from '../model/repos';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userName:string = "venasoft";
  repos:repos[] | undefined;

  loading:boolean =  false;

errorMessage:any;
  

  constructor(private gitHubService:GithubService){

  }


  public getRepos(){
    this.loading = true;
    this.errorMessage ="";
    this.gitHubService.getRepos(this.userName)
    .subscribe((response) =>{
    console.log("xabar keldi");
    this.repos =  response;
    },

    (error) =>{
      console.log("so'rovda xatolik !");
      this.errorMessage =  error;
      this.loading =  false;
      
    },

    ()=>{
      console.error("So'rov kelgan !");
      this.loading= false;
      
    }


  
  
  
  )

  }


}
