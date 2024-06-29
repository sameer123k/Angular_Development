import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../client.service';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import * as actions from '../../app-state/Action/index';
import * as fromRoot from 'src/app/app-state';
@Component({
  selector: 'app-new-clientlist',
  templateUrl: './new-clientlist.component.html',
  styleUrls: ['./new-clientlist.component.scss']
})
export class NewClientlistComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();

  displayedColumns: string[] = ['name', 'Email', 'Password', 'Age', 'Contact'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  // @Input() ClientData =new MatTableDataSource<[]>
  // store: any;
  

  @Input('callType') set childEvents(value: any) {
    console.log('dfghjk',value,this.dataSource.data)
    if (value && value != 'All') {
      this.dataSource.filter = value;
      console.log('dfghjk',value,this.dataSource.data)
    }
  }

  constructor(private readonly store: Store){ 
 this.store.dispatch(
      actions.getClientList({
      })
    );
    this.store
      .select(fromRoot.selectStatesgetclientToclientinformationListBody)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data2: any) => {
        this.dataSource.data = data2
      })
  }
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
  
}
