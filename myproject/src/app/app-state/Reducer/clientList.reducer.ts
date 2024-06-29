import { Action, createReducer, on } from '@ngrx/store';
import * as actionsType from '../Action';
import { getClient } from '../Type';

export interface State {
  customerStates?: getClient[];
  defaultCustomerStates?: getClient[];
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: string;
}

export const initialState: State = {
  customerStates: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: '',
};

const customerStatesReducer = createReducer(
  initialState,
  on(actionsType.getClientList, (state) => ({...state, isLoading: true})),
  on(actionsType.getClientListSuccess, (state, result) => {
    return{
      ...state,
      defaultCustomerStates: result.response, 
      customerStates: result.response, 
      isLoading: false, 
      isLoadingSuccess: true
    }}),
  on(actionsType.getClientListFailure, (state, result) => ({
      ...state,
      customerStates: [], 
      isLoading: false, 
      isLoadingSuccess: false,
      isLoadingFailure:result.error
    })),
  
);

export function reducer(state: State | undefined, action: Action): any {
  return customerStatesReducer(state, action);
}

