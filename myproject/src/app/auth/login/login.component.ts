import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../../guard/auth.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName:any = [] ;

  signupData: any

  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService, private pagetitle: Title) {
    this.signupData = localStorage.getItem('SignupData')
    this.signupData = JSON.parse(this.signupData)
    console.log('Already Existed Local Storage Data', this.signupData)
    this.pagetitle.setTitle("Login");
  }

  ngOnInit() {
    if (this.auth.isloggedIn()) {
      this.router.navigate(['/admin'])
    }
  }

  // form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  login() {

    if (!this.signupData) {
      alert('Local Storage Data Not Found');
    }
    else {
      const matchedData = this.signupData.find((res: any) =>
        this.loginForm.value.email == res.email &&
        this.loginForm.value.password == res.password
      )

      if (matchedData) {
        this.auth.setToken('302020');
        this.userName.push(this.loginForm.value.email);
        this.auth.loginUser(this.userName)
        alert('Login Successfully');
        this.router.navigate(['/admin'])
      }
      else {
        alert(' Invalid Details ');
      }
    }

  }
}
