import { Component } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component {

  submit(userlogin:any){
    console.log("Xabar ketdi!" , userlogin);
    
  }

}
