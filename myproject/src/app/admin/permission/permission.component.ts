import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataService } from '../user-data.service';
import { ClientService } from '../client.service';
import { concat } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import * as fromRoot from 'src/app/app-state';
import * as actions from '../../app-state/Action/index';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['name', 'edit', 'delete', 'view', 'edit1', 'delete1', 'view1','action'];
  dataSource = new MatTableDataSource<any>;

  usersList:any[]=[]
  clientList:any[]=[]
  mergedArray:any[] = [];
  nameData:any[]=[]

   //pagination
   @ViewChild(MatPaginator, { static: true })
   paginator!: MatPaginator;
   @ViewChild(MatSort, { static: true })
   sort!: MatSort;
  Data: any;

//   constructor(private _service1:UserDataService , private _service2:ClientService){ 
//     this._service2.getpermission().subscribe((abb:any)=>{
//       console.log('get permission works !!!', abb)
//     })

//   this._service1.getUser().subscribe((res:any)=>{
//     this.usersList=res

//     this._service2.getUser().subscribe((abc:any)=>{
//       this.clientList=abc

//       this.mergedArray=[...this.usersList,...this.clientList] 

//         this.mergedArray.map((value)=>{
//            this.nameData.push({name:value.name,clienEdit:true,clientDelete:true,clientView:true,userEdit:true,userDelete:true,userView:true,id:value._id})
//         })        
//         this.dataSource.data=this.nameData
//         console.log('your name Data',this.nameData)
//     })
//   })
// }
// constructor( private _service2:ClientService){
// this._service2.getpermission().subscribe((abcc:any)=>{
//   console.log('get api works >>',abcc)
//   this.dataSource.data=abcc
// })
// }

constructor(private _service2:ClientService, private readonly store: Store,) {
  this.store.dispatch(
    actions.getPermissionList({
    })
  );
  this.store
    .select(fromRoot.selectStatesgetpermissionTopermissioninformationListBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data2: any) => {
      this.Data = data2
      this.dataSource.data = data2
      console.log('your data !!!',data2)
    })

}

ngOnInit() {
  this.dataSource.paginator = this.paginator;
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue;
}
deleteData(id:any){
  this._service2.deletepermission(id).subscribe((helo:any)=>{
  // this.dataSource.data=[]
  })
}

change(flag:any){
  this.dataSource.data = JSON.parse(JSON.stringify(this.dataSource.data))
 let index  = this.dataSource.data.findIndex((helloo:any)=>helloo._id == flag._id )
   console.log('index value',index)
   if(flag.clientEdit){
    this.dataSource.data[index].clientEdit= false
   }
   else{
    this.dataSource.data[index].clientEdit= true
   }
   this._service2.updatepermission(flag._id,this.dataSource.data[index]).subscribe((aza:any)=>{
    
   })
}



}