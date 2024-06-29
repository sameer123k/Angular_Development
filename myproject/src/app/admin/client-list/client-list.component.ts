import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';


import * as fromRoot from 'src/app/app-state';
import * as actions from '../../app-state/Action/index';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  Data: any
  displayedColumns: string[] = ['name', 'email', 'password', 'dob', 'contact', 'action'];
  dataSource = new MatTableDataSource<[]>;
  id: any
  nameData: any[] = []
  emailData: any[] = []
  startDate = ''
  endDate = ''

  //pagination
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  // constructor(private _service: ClientService, private readonly store: Store,) {
    // for ngrx method
    // this.store.dispatch(
    //   actions.getClientList({
    //   })
    // );
    // this.store
    //   .select(fromRoot.selectStatesgetclientToclientinformationListBody)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data2: any) => {
    //     this.Data = data2
    //     this.dataSource.data = data2
    //   })

    // for servie file method

    // this._service.getUser().subscribe((hello:any)=>{
    //  this.Data=hello
    //  this.dataSource.data=hello
    //  //.data for mat table predefined function use

    //  this.Data.map((value: { name: any; })=>{
    //   this.nameData.push(value.name)
    // });

    // this.Data.map(((value: { email: any; })=>{
    //   this.emailData.push(value.email)
    // }))
    // //  console.log(' name data success', this.nameData)
    // })
  // }
  // api calling with promise method
constructor(private _service: ClientService){ }
 //api calling with observable method
  ngOnInit(){
  this._service.getClients().subscribe((ClientsData:any) => {
    this.dataSource.data = ClientsData
    this.Data= ClientsData
    console.log('data from ngrx', ClientsData)
    //name filter
    this.Data.map((value:any)=>{
      this.nameData.push(value.name)
    })
    //emailfilter
    this.Data.map((value:any)=>{
      this.emailData.push(value.email)
    })
  })

  }

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue;
  // }
  // our form


  ClientForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  // getters for validation
  get Name() {
    return this.ClientForm.get('name')
  }
  get Email() {
    return this.ClientForm.get('email')
  }
  get Password() {
    return this.ClientForm.get('password')
  }
  get Dob() {
    return this.ClientForm.get('dob')
  }
  get Contact() {
    return this.ClientForm.get('contact')
  }

  // validators


  saveData() {
    if (this.id) {
      this._service.updateData(this.id, this.ClientForm.value).subscribe((res: any) => {
        console.log(res, 'Update Data !')
      })
    }
    else {
      this._service.addUser(this.ClientForm.value).subscribe((res: any) => {
        console.log('data add', res)
      })
    }
  }

  // delete
  deleteData(hello: any) {
    this._service.deleteClient(hello).subscribe((res: any) => {
      // console.log('delete api !!!!!', res)
      this._service.getUser().subscribe((aaaa: any) => {
        this.Data = []
        this.Data = aaaa
      })
    })
  }
  // edit data
  editData(abc: any) {
    this._service.findData(abc).subscribe((helo: any) => {
      this.id = helo._id
      this.ClientForm = new FormGroup({
        name: new FormControl(helo['name']),
        email: new FormControl(helo['email']),
        password: new FormControl(helo['password']),
        age: new FormControl(helo['age']),
        contact: new FormControl(helo['contact']),
      })
    })
  }

  // name filter
  nameFilter(a: any) {
    this.dataSource.filter = a.value
  }
  //email filter
  emailFilter(b: any) {
    this.dataSource.filter = b.value
  }
  //date filter with the help of moment
  filterDate() {
    this.dataSource.data = this.Data.filter((abc: any) => {
      return moment(moment(abc?.age).format('MM-DD-YYYY')).isBetween(moment(this.startDate).format('MM-DD-YYYY'), moment(this.endDate).format('MM-DD-YYYY'))
    })
  }
}

