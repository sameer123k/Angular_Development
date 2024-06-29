import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private route:ActivatedRoute, private router: Router){

  }

  signupData:any [] =[]
  //  form start

  applyForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    Phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmpassword:new FormControl('',[Validators.required]),
    pin:new FormControl('',[Validators.required, Validators.minLength(6)]),
  });

    // getters
    get name(){
      return this.applyForm.get('name')
    }
    get Phone(){
      return this.applyForm.get('Phone')
    }
    get email(){
      return this.applyForm.get('email')
    }
    get password(){
      return this.applyForm.get('password')
    }
    get confirmpassword(){
      return this.applyForm.get('confirmpassword')
    }
    get pin(){
      return this.applyForm.get('pin')
    }

    //  <------- submit button -------->
  submitButton(){
   console.log(this.applyForm.value);   
  this.signupData.push(this.applyForm.value)
  localStorage.setItem('SignupData',JSON.stringify(this.signupData))
  // localStorage.setItem('Signupdata',JSON.stringify(this.signupData))
  this.router.navigate(['/login']);
  }

  // show & hide password syntax
  passwordType: string = 'password';
  show = false;
  onClick(){
    if(this.passwordType == 'password'){

      this.passwordType = 'text';
      this.show = true;
  }
  else{
    this.passwordType = 'password';
      this.show = false;
  }
   }

   passwordType2:string = 'password';
   show1 =false;
   onClick2(){
      if(this.passwordType2 == 'password'){
        this.passwordType2= 'text'
        this.show1=true
      }
      else{
        this.passwordType2 = 'password'
        this.show1=false
      }
   }

}
