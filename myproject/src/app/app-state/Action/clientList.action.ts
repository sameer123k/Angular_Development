import { createAction, props } from '@ngrx/store';


export const getClientList = createAction(
  '[USER_DEALER_OUTLET_MAPPING_LIST] Get getClientList',
  props<any>()
);

export const getClientListSuccess = createAction(
'[USER_DEALER_OUTLET_MAPPING_LIST] Get getClientListSuccess Success',
  props<any>()
);

export const getClientListFailure = createAction(
'[USER_DEALER_OUTLET_MAPPING_LIST] Get getClientListFailure Failure',
  props<any>()
);
