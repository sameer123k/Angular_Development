import { createAction, props } from '@ngrx/store';


export const getPermissionList = createAction(
  '[USER_DEALER_OUTLET_MAPPING_LIST] Get getPermissionList',
  props<any>()
);

export const getPermissionListSuccess = createAction(
'[USER_DEALER_OUTLET_MAPPING_LIST] Get getPermissionListSuccess Success',
  props<any>()
);

export const getPermissionListFailure = createAction(
'[USER_DEALER_OUTLET_MAPPING_LIST] Get getPermissionListFailure Failure',
  props<any>()
);
