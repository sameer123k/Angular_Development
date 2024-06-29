import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {



  constructor(private http: HttpClient) { }
  url1="http://localhost:7000/api/" 

  url3= 'http://localhost:7000/api/deleteClient/'

  url4 = 'http://localhost:7000/api/findClientById/'
  url5 = 'http://localhost:7000/api/updateClientdata/'

  //permission
  url6 = 'http://localhost:7000/api/addpermission/'

  url7 = 'http://localhost:7000/api/findallpermissions/'

  url8 = 'http://localhost:7000/api/deletepermission/'
  
  url9 = 'http://localhost:7000/api/updatepermission/'


  addUser(data:any){
    return this.http.post(`${this.url1}addnewclient`,data)
  }
  getUser(){
    return this.http.get(`${this.url1}findallclients`)
  }
  deleteClient(id:any){
    return this.http.delete(this.url3+id)
  }
  findData(id:any){
    return this.http.get(this.url4+id)
  }
  updateData(id:any , data:any){
    return this.http.put(this.url5+id, data)
  }

  //permission
  addpermission(data:any){
    return this.http.post(this.url6,data)
  }
  getpermission(){
    return this.http.get(this.url7)
  }
  deletepermission(id:any){
    return this.http.delete(this.url8+id)
  }
  updatepermission(id:any , data:any){
   return this.http.put(this.url9+id, data)
  }

  // get api calling with observable method
  getClients():Observable<any>{
    return this.http.get(`${this.url1}findallclients`)
   }

   //post observable
   postClients(data:any):Observable<any>{
     return this.http.post(`${this.url1}addnewclient`,data)
   }


}


