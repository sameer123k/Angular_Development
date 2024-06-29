import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ClientService } from 'src/app/admin/client.service';

import * as allActions from '../Action';

@Injectable()
export class GetPermissionListEffects {
  constructor(
    private actions$: Actions,
    private DataManagementService: ClientService,
    private readonly store: Store
  ) {}

  GetPermissionListEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.getPermissionList),
      exhaustMap((action) =>
        this.DataManagementService.getpermission( 
        ).pipe(
          map((response) => {            
            
            return allActions.getPermissionListSuccess({
              response,
            });
          }),
          catchError((error: any) =>
            of(allActions.getPermissionListFailure(error))
          )
        )
      )
    )
  );
}
