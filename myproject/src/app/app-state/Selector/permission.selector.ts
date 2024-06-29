import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as reducer from '../Reducer/clientList.reducer'
import * as reducer from '../Reducer/permission.reducer'
  
const state = createFeatureSelector<reducer.State>('permission');


export const getpermissionList = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesgetpermissionInformationList= createSelector(
  state,
  state => state
);

export const selectStatesgetpermissionTopermissioninformationListBody= createSelector(
  state,
  state => state.customerStates
);

export const selectStatesgetpermissionTopermissioninformationListData= createSelector(
  state,
  state => state.customerStates
);
  
export const selectStatesgetpermissionTopermissioninformationListDataDefaultData = createSelector(
    state,
    state => state.defaultCustomerStates
  );




