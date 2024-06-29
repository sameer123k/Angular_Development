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

const userStatesReducer = createReducer(
  initialState,
  on(actionsType.getUserList, (state) => ({...state, isLoading: true})),
  on(actionsType.getUserListSuccess, (state, result) => {
    return{
      ...state,
      defaultCustomerStates: result.response, 
      customerStates: result.response, 
      isLoading: false, 
      isLoadingSuccess: true
    }}),
  on(actionsType.getUserListFailure, (state, result) => ({
      ...state,
      customerStates: [], 
      isLoading: false, 
      isLoadingSuccess: false,
      isLoadingFailure:result.error
    })),
  
);

export function reducer(state: State | undefined, action: Action): any {
  return userStatesReducer(state, action);
}

