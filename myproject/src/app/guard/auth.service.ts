import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: ActivatedRoute, private router: Router) { }  

  setToken(token:string){
   return  localStorage.setItem('token',token);
  }

  getToken(): string | null {
  return localStorage.getItem('token');
  }

  isloggedIn() {
     return this.getToken() != null;
  }

islogout(){
  localStorage.removeItem('token');
  this.router.navigate(['../login']);
  console.log('logout works');
}

// login user mail 

loginUser(data:string){
  return data;
}


}
