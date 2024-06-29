import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateRange } from '@angular/material/datepicker';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OnInit, OnDestroy, ViewChild } from '@angular/core';

import * as fromRoot from 'src/app/app-state';
import * as actions from '../../app-state/Action/index';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();

  clientArray: any[] = []
  hello: any  // for data dont replace
  Data: any
  // filterValue:any
  searchText = ''
  user: any[] = []
  httpClient: any;
  id: any
  selectedCategory: string = 'All';
  startDate = ''
  endDate = ''
  dataSet: any[] = [] // for range select data
  nameData: any[] = []  //for name filter
  emailData: any[] = [] //for email filter
  abc = ''
  selectedFilter = ''
  // mat table
  displayedColumns: string[] = ['name', 'Email', 'Password', 'Age', 'Contact', 'Action'];
  dataSource = new MatTableDataSource<any>;

  // for pagination

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

   constructor( private _servicefile: UserDataService,private readonly store: Store){  

    this._servicefile.getUser().subscribe((aaaa:any)=>{

      this.dataSet=aaaa
      this.Data=aaaa   
      this.dataSource.data=aaaa
      console.log('datasource work ', this.dataSource)

       this.dataSet.map(value=>{
              this.nameData.push(value.name)
      });
      this.dataSet.map(value=>{
        this.emailData.push(value.email)
      })

     })
   }

  //  for pagination

  // constructor (private _servicefile: UserDataService, private readonly store: Store,) {
  //   this.store.dispatch(
  //     actions.getUserList({
  //     })
  //   );
  //   this.store
  //     .select(fromRoot.selectStatesgetuserTouserinformationListBody)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((abc: any) => {
  //       this.Data=abc   
  //       this.dataSource.data=abc
  //     })

  // }
  //data retrieve with the help of promise


  // constructor(private _servicefile: UserDataService) {
  //   this._servicefile.fetchData().then((value: any) => { 
  //     this.dataSet = value
  //     this.dataSource.data = this.dataSet

  //     this.dataSet.map((hii: any) => {
  //       this.nameData.push(hii.name)
  //     })

  //     this.dataSet.map((hi: any) => {
  //       this.emailData.push(hi.email)
  //     })
  //   })
  // }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //data search by name
  namefilter(e: any) {
    this.dataSource.filter = e;
  }
  // data serarch by email
  emailfilter(ab: any) {
    this.dataSource.filter = ab;
  }

  //data filter by date range
  changeDate() {
    this.dataSource.data = this.dataSet.filter((ele: any) => {
      return moment(moment(ele?.age).format('MM-DD-YYYY')).isBetween(moment(this.startDate).format('MM-DD-YYYY'), moment(this.endDate).format('MM-DD-YYYY'))
    })
  }
  //form
  addUser = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })
  //  getters for validtion
  get Name() {
    return this.addUser.get('name')
  }
  get email() {
    return this.addUser.get('email')
  }
  get Password() {
    return this.addUser.get('password')
  }
  get Age() {
    return this.addUser.get('age')
  }
  get Phone() {
    return this.addUser.get('contact')
  }


  //update & post api
  submitData() {

    if (this.id) {
      // this._servicefile.updateUser(this.id,this.addUser.value).subscribe((res:any)=>{
      //   console.log(res,'Update api works')    
      // })
      this._servicefile.fetchData5(this.id, this.addUser.value).subscribe((res: any) => {
        console.log(res, 'Update api works')
      })

    }
    // post api
    else {
      // this._servicefile.saveUsers(this.addUser.value).subscribe((res:any)=>{
      //   console.log(res,'post api works')
      // })

      // promise method
      this._servicefile.fetchData2(this.addUser.value).then((hi: any) => {
        console.log(hi, 'post api works')

      })

    }
  }

  //  delete data
  deleteData(hello: any) {

    // this._servicefile.deleteUser(hello).subscribe((res:any)=>{
    //   this._servicefile.getUser().subscribe((aaaa:any)=>{
    //     this.Data=[]      
    //     this.Data=aaaa
    //     // this.dataSet=aaaa
    //    })
    // })

    //with promise method
    this._servicefile.fetchData3(hello).subscribe((res: any) => {
      this._servicefile.fetchData().then((hel: any) => {
        this.dataSet = []
        this.dataSet = hel
      })
    })


  }
  //Edit api
  editData(hello: any) {
    // this._servicefile.editUser(hello).subscribe((res:any)=>{
    //   this.id = res._id
    //   this.addUser= new FormGroup({
    //     name: new FormControl(res['name']),
    //     email:new FormControl(res['email']),
    //     password:new FormControl(res['password']),
    //     age:new FormControl(res['age']),
    //     contact: new FormControl(res['contact']),
    //  })
    // })

    //promise method
    this._servicefile.fetchData4(hello).subscribe((abb: any) => {
      console.log('edit api works ???')
      this.id = abb._id
      this.addUser = new FormGroup({
        name: new FormControl(abb['name']),
        email: new FormControl(abb['email']),
        password: new FormControl(abb['password']),
        age: new FormControl(abb['age']),
        contact: new FormControl(abb['contact']),
      })

    })
  }


  //search filter
  search(event: any) {
    console.log(event.target.value)
    this.dataSource.filter = event.target.value
  }



}



