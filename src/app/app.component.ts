import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { convertToParamMap } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


 

  title:string = "Angular xatolik bilan ishlash!";


  throwError1(){
  
    

 
  }



  throwError2(){
   try {

    console.log("Xatolik");
    
   }


   catch(error){

     // xatolik bo'lgan hodisa
     console.log("Xatolik");
     


   }
   
  }



}
