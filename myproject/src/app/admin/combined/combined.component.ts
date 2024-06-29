import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ClientService } from '../client.service';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as actions from '../../app-state/Action/index';
import * as fromRoot from 'src/app/app-state';
import * as moment from 'moment';
@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss']
})
export class CombinedComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  // UserlistData:any
  // ClientlistData:any
  // PermissionData:any
  selectedIndex:number = 0
   nameData:any
   Data:any
   nameData2:any [] =[]
   emailData:any [] = []//email data
   emailData2:any //for input decorators
   searchText:any
   nameFilters:any 

   Startdate=''
   Enddate=''
   dateFilter:any
   show = false;


  constructor(private _service:UserDataService, private _service2:ClientService ,  private readonly store: Store){

    // this._service.fetchData().then((hello:any)=>{
    //   this.UserlistData=hello
    //   console.log(' Your Data !!!', this.UserlistData)
    // })

    // this._service2.getUser().subscribe((aa:any)=>{
    // this.ClientlistData=aa
    // })

    // this._service2.getpermission().subscribe((ab:any)=>{
    //  this.PermissionData=ab
    // })
    this.store
    .select(fromRoot.selectStatesgetuserTouserinformationListBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe((abc: any) => {
      this.Data=abc
      this.Data.map((item:any)=>{
      this.nameData2.push(item.name)
      })
      this.Data.map((helo:any)=>{
        this.emailData.push(helo.email)
      })


    })



  }

  child(name:string){
   console.log('Your name =' +name);
   this.nameData = name
  }

  onTabChanged(abc:any){
    this.nameData2 =[]
    this.emailData=[] //for empty data

   if(abc.index==0){
    this.store
    .select(fromRoot.selectStatesgetuserTouserinformationListBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe((abc: any) => {
      this.Data=abc
      this.Data.map((item:any)=>{
      this.nameData2.push(item.name)
      })
      this.show=false;
      console.log('1st tab data',this.nameData2);
      this.Data.map((abc:any)=>{
        this.emailData.push(abc.email)
      })
      console.log('1st tab email',this.emailData);
      
    })
   }
   else if(abc.index==1){
    this.store
    .select(fromRoot.selectStatesgetclientToclientinformationListBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data2: any) => {
      this.Data=data2
      this.Data.map((item:any)=>{
      this.nameData2.push(item.name)      
      })
      this.show=false;
      console.log('2nd tab data',this.nameData2);

      this.Data.map((abc:any)=>{
        this.emailData.push(abc.email)
      })
    })
   }
   else if(abc.index==2){
    this.store
    .select(fromRoot.selectStatesgetpermissionTopermissioninformationListBody)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data3: any) => {
      this.Data=data3

      this.Data.map((helo:any)=>{
        this.nameData2.push(helo.name)
      })
      this.show=true;
      console.log('3rd tab data',this.nameData2);
  
    })
   }
  }

  nameFilter(event:any){
    this.nameFilters = event.value
    console.log('name filter work >>',this.nameFilters)
  }
  emailDatafilter(event:any){
   this.emailData2=event.value
   console.log('email filter work >>',this.emailData2);
   
  }
  DateFilter(aa:any , bb:any){  
     this.dateFilter = {firstdate: aa, lastdate: bb}
       console.log('your date filter value', this.dateFilter);
  }
    //  this.dateFilter = this.Data.filter((abc: any) => {
      // return moment(moment(abc?.age).format('MM-DD-YYYY')).isBetween(moment(this.Startdate).format('MM-DD-YYYY'), moment(this.Enddate).format('MM-DD-YYYY'))
    // })

   

  
  
}
