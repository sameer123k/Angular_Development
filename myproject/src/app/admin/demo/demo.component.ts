import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  displayedColumns: string[] = ['name', 'email', 'password', 'dob', 'contact', 'action'];
  dataSource = new MatTableDataSource<[]>;

  Data: any
  nameData: any[] = []
  emailData: any[] = []
  getData: any
  data: any
  id: any
  constructor(private _service: ClientService) {
    this._service.getUser().subscribe((res: any) => {
      this.getData = res;
      this.data = res;
      this.dataSource.data = this.getData;   // .data is very important for search filter 

      this.getData.map((value: any) => {
        this.nameData.push(value.name)
      })

      this.getData.map((value: any) => {
        this.emailData.push(value.email)
      })
    })
  }

  signUPData: any = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(' '),
    contact: new FormControl(' '),
  })


  namefilter(hello: any) {
    this.dataSource.filter  = hello
  }

  emailFilter(aa:any){
    this.dataSource.filter = aa
  }

  saveData() {

    if (this.id) {
      this._service.updateData(this.id, this.signUPData.value).subscribe((res: any) => {
        console.log('data update');

      })
    }
    else {
      this._service.addUser(this.signUPData.value).subscribe((res: any) => {
        console.log('data add successfully', res);
      });
    }

  }


  deleteUser(abc: any) {
    this._service.deleteClient(abc).subscribe((res: any) => {
      this._service.getClients().subscribe((res: any) => {
        this.getData = []
        this.getData = res;
      })
    })
  }

  editData(hello: any) {
    this._service.findData(hello).subscribe((res: any) => {
      this.id = res._id
      console.log('your Data', this.id);

      this.signUPData = new FormGroup({
        name: new FormControl(res.name),
        email: new FormControl(res.email),
        password: new FormControl(res.password),
        age: new FormControl(res.age),
        contact: new FormControl(res.contact),
      })
    })
  }

  searchFilter(event: any) {
    console.log(event.target.value)
    this.dataSource.filter = event.target.value
  }




}