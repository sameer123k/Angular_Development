import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ClientService } from 'src/app/admin/client.service';
import * as allActions from '../Action';

@Injectable()
export class GetClientListEffects {
  constructor(
    private actions$: Actions,
    private DataManagementService: ClientService,
    private readonly store: Store
  ) {}

  getUsernameToUserInformationList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.getClientList),
      exhaustMap((action) =>
        this.DataManagementService.getUser(
        ).pipe(
          map((response) => {            
            
            return allActions.getClientListSuccess({
              response,
            });
          }),
          catchError((error: any) =>
            of(allActions.getClientListFailure(error))
          )
        )
      )
    )
  );
}
