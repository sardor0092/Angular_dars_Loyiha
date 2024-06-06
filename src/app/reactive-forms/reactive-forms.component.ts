import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  signUpForm = new FormGroup({
    firstName:new FormControl(" " ,[
      Validators.required,
      Validators.minLength(5)
    ]),

    lastName:new FormControl(" " ,[
      Validators.required,
      Validators.minLength(5)
    ]),



    adress: new FormGroup({
      street:new FormControl(''
      ,[
        Validators.required,
        Validators.minLength(5)
      ])
    })

   

  })

  onSubmit(){
    console.log(this.signUpForm.value);
    
  }



}
