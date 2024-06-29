import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../Reducer/clientList.reducer'

const state = createFeatureSelector<reducer.State>('clientList');


export const getclientList = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesgetclientInformationList= createSelector(
  state,
  state => state
);

export const selectStatesgetclientToclientinformationListBody= createSelector(
  state,
  state => state.customerStates
);

export const selectStatesgetclientToclientinformationListData= createSelector(
  state,
  state => state.customerStates
);

export const selectStatesgetclientToclientinformationListDataDefaultData = createSelector(
    state,
    state => state.defaultCustomerStates
  );




