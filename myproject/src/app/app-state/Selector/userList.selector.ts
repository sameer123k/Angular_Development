import { createFeatureSelector, createSelector } from '@ngrx/store';
// import * as reducer from '../Reducer/clientList.reducer'
import * as reducer from '../Reducer/userList.reducer'
  
const state = createFeatureSelector<reducer.State>('userList');


export const getuserList = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesgetuserInformationList= createSelector(
  state,
  state => state
);

export const selectStatesgetuserTouserinformationListBody= createSelector(
  state,
  state => state.customerStates
);

export const selectStatesgetuserTouserinformationListData= createSelector(
  state,
  state => state.customerStates
);
  
export const selectStatesgetuserTouserinformationListDataDefaultData = createSelector(
    state,
    state => state.defaultCustomerStates
  );




