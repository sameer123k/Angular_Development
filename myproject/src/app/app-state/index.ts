import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';  //import your reducer
  import * as clientListReducer from './Reducer/clientList.reducer'
  import * as userListReducer from './Reducer/userList.reducer'
  import * as permissionReducer from './Reducer/permission.reducer'
  export interface State {



    // Define here
    clientList: clientListReducer.State;
    userList: userListReducer.State;
    permission:permissionReducer.State;

  }
  export const reducers: ActionReducerMap<State> = {
    // Activity
    clientList: clientListReducer.reducer,
    userList: userListReducer.reducer,
    permission:permissionReducer.reducer,
  }
  
 

  export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
     

      return reducer(state, action);
    };
  }


  
  

  export * from './Selector/index';
export function bussinessMetricsTargetVsAchievement(bussinessMetricsTargetVsAchievement: any) {
  throw new Error('Function not implemented.');
}