import { Component } from '@angular/core';
import {  FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { first } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    signupData:any

    constructor(private route:ActivatedRoute, private router: Router){
    this.signupData= localStorage.getItem('SignupData')
    this.signupData=JSON.parse(this.signupData)
    console.log('hiiii',this.signupData)
  }

  // form
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  })


  login(){

     // stored data from the register-form
     let storedName = this.signupData[0].email;
     let storedPw = this.signupData[0].password;
    //  console.log('data from storage',storedName)
    if(this.loginForm.value.email == storedName &&
      this.loginForm.value.password == storedPw )
      {
      this.router.navigate(['/admin'])
  }
  else{
      alert('Error on login');
  }
  }
}
