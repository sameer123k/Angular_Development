import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
// import { ClientService } from 'src/app/admin/client.service';
import { UserDataService } from 'src/app/admin/user-data.service';
import * as allActions from '../Action';

@Injectable()
export class GetUserListEffects {
  constructor(
    private actions$: Actions,
    private DataManagementService: UserDataService,
    private readonly store: Store
  ) {}

  getUsernameToUserInformationList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.getUserList),
      exhaustMap((action) =>
        this.DataManagementService.getUser( //service file get data function
        ).pipe(
          map((response) => {            
            
            return allActions.getUserListSuccess({
              response,
            });
          }),
          catchError((error: any) =>
            of(allActions.getUserListFailure(error))
          )
        )
      )
    )
  );
}
