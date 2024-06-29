import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  url= "http://localhost:7000/api/findallcustomer";  //get api
  url2= 'http://localhost:7000/api/addnewcustomer' //post api
  url3= 'http://localhost:7000/api/deleteByID/' //delete api
  url4 ='http://localhost:7000/api/findByID/'   //edit data
  url5 ='http://localhost:7000/api/updateByID/' //update api
  data: any;


  constructor(private http: HttpClient) { }



 //get api
  getUser(){
    return  this.http.get(this.url)
  }
    // get api with promise method
    fetchData(){
      const promise = this.http.get(this.url).toPromise();
      return promise
    }

  //for post api
  saveUsers(data:any){
    return this.http.post(this.url2,data);
    }

  //for post api with promise
  fetchData2(data:any){
    const promise = this.http.post(this.url2,data).toPromise();
    return promise
  }


     // delete api
   deleteUser(id:any){
        return this.http.delete(this.url3+id)
      }

   //for delete api with promise
   fetchData3(id:any){
   const promise = this.http.delete(this.url3+id)
   return promise
   }


     // edit user api
   editUser(id:any){
     return this.http.get(this.url4+id)
   }

   //edit user promise method
   fetchData4(id:any){
    const promise= this.http.get(this.url4+id)
    return promise
   }

  //  update user
  updateUser(id:any , data:any){
   return this.http.put(this.url5+id , data)
  }
  //update with promise method
  fetchData5(id:any, data:any){
    const promise= this.http.put(this.url5+id, data)
    return promise
   }
}
