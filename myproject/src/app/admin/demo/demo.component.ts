import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataService } from '../user-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

   Userdata:any=[]
   id:any
   nameData:any = []
   emailData:any = []
  constructor(private service:UserDataService){
    this.service.getUser().subscribe((abc:any)=>{
      this.Userdata=abc
      this.Userdata.map((helo:any)=>{
        this.nameData.push(helo.name)
        this.emailData.push(helo.email)
        console.log(this.nameData);
      })
     this.dataSource.data=this.Userdata
    })
  }

  displayedColumns: string[] = [ 'name', 'email', 'password', 'age' , 'contact', 'action'];
  dataSource = new MatTableDataSource<any>;

  SignupForm =  new FormGroup({
    name: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    age: new FormControl('',[Validators.required,Validators.minLength(2)]),
    contact: new FormControl('',[Validators.required,Validators.minLength(10)]),
  })

// getters for validations

  get Name(){
    return this.SignupForm.get('name')
  }
  get Email(){
    return this.SignupForm.get('email')
  }
 get Password(){
  return this.SignupForm.get('password')
 }
 get Age(){
  return this.SignupForm.get('age')
 }
 get Contact(){
  return this.SignupForm.get('contact')
 }

  SaveData(){
    if(this.id){
     this.service.updateUser(this.id,this.SignupForm.value).subscribe((update:any)=>{
      console.log('update data successully !');
     })
    }
    else{
    this.service.saveUsers(this.SignupForm.value).subscribe((helo:any)=>{
      console.log('post api sucessully !');
    })
  }
  }
  DeleteUser(abc:any){
    this.service.deleteUser(abc).subscribe((aa:any)=>{
     this.service.getUser().subscribe((data:any)=>{
      this.Userdata=[]
      this.Userdata=data
     })
    })
  }
  EditUser(item:any){
   this.service.editUser(item).subscribe((helo:any)=>{
    this.id = helo._id
    this.SignupForm =  new FormGroup({
      name: new FormControl(helo['name']),
      email:new FormControl(helo['email']),
      password: new FormControl(helo['password']),
      age: new FormControl(helo['age']),
      contact: new FormControl(helo['contact']),
    })
   })
  }
  searchData(abc:any){
    this.dataSource.filter = abc.target.value
  }
  nameFilter(abc:any){
    console.log(abc);
    this.dataSource.filter = abc
  }
  emailFilter(helo:any){
    this.dataSource.filter=helo
  }
}
