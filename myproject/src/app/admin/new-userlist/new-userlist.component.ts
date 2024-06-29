import { Component, Input , EventEmitter, Output } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as actions from '../../app-state/Action/index';
import * as fromRoot from 'src/app/app-state';

@Component({
  selector: 'app-new-userlist',
  templateUrl: './new-userlist.component.html',
  styleUrls: ['./new-userlist.component.scss']
})
export class NewUserlistComponent {
  namefilterData:any
  destroy$: Subject<boolean> = new Subject<boolean>();

  displayedColumns: string[] = ['name', 'Email', 'Password', 'Age', 'Contact'];
  dataSource = new MatTableDataSource<any>;


  @Input('callType') set childEvents(value: any) {
    // console.log('dfghjk',value,this.dataSource.data)
    if (value && value != 'All') {
      this.dataSource.filter = value;
      console.log('dfghjk',value,this.dataSource.data)
    }
  }


  // @Input('callType') set childEvents(value: any) {
  //   console.log('dfghjk',value,this.dataSource.data)
  //   if (value && value != 'All') {
  //     this.dataSource.filter = value;
  //     console.log('dfghjk',value,this.dataSource.data)
  //   }
  // }




  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;


  UserlistData:any
  //for output decorators
  //  @Output() childEvent= new EventEmitter();
     @Output() output= new EventEmitter();

  // constructor(private _service:UserDataService) {
  //    this._service.fetchData().then((hello:any)=>{
  //     this.UserlistData=hello
  //     this.UserData.data=hello
  //     console.log(' Your Data !!!', this.UserlistData)
  //   })

  // }

  constructor(private _service:UserDataService , private readonly store: Store){
    this.store.dispatch(
          actions.getUserList({
          })
        );
        //selector
        this.store
          .select(fromRoot.selectStatesgetuserTouserinformationListBody)
          .pipe(takeUntil(this.destroy$))
          .subscribe((abc: any) => {
            this.dataSource.data=abc
          })
          this.namefilterData=this.childEvents

  }

  // Namedata(abc:any){
  //  console.log('name passes');
  //  this.childEvent.emit(abc);
  // }

  ngOnInit() {
    // this.UserData.paginator = this.paginator;
    // this.UserData.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  nameData(hello:any){


  }


}
