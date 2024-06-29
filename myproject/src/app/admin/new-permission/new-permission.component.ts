import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Subject, takeUntil } from 'rxjs';
import * as fromRoot from 'src/app/app-state';
import * as actions from '../../app-state/Action/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-new-permission',
  templateUrl: './new-permission.component.html',
  styleUrls: ['./new-permission.component.scss']
})
export class NewPermissionComponent {
  destroy$: Subject<boolean> = new Subject<boolean>();
  displayedColumns: string[] = ['name', 'edit', 'delete', 'view', 'edit1', 'delete1', 'view1'];
  dataSource = new MatTableDataSource<any>;

  // @Input() PermissionDataList = new MatTableDataSource<[ ]>
  constructor(private readonly store: Store,) {
    this.store.dispatch(
      actions.getPermissionList({
      })
    );
    this.store
      .select(fromRoot.selectStatesgetpermissionTopermissioninformationListBody)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data2: any) => {
        this.dataSource.data = data2
        console.log('your data !!!',data2)
      })
  
  }
}
