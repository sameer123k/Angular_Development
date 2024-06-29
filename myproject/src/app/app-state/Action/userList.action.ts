import { createAction, props } from '@ngrx/store';


export const getUserList = createAction(
  '[USER_DEALER_OUTLET_MAPPING_LIST] Get getUserList',
  props<any>()
);

export const getUserListSuccess = createAction(
'[USER_DEALER_OUTLET_MAPPING_LIST] Get getUserListSuccess Success',
  props<any>()
);

export const getUserListFailure = createAction(
'[USER_DEALER_OUTLET_MAPPING_LIST] Get getUserListFailure Failure',
  props<any>()
);
