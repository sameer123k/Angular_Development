import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers} from './index'
//define here
import { GetClientListEffects } from './Effects/clientList.effects';
import { GetUserListEffects } from './Effects/userList.effects'
import {GetPermissionListEffects} from './Effects/permission.effects'

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
    
    }),
    EffectsModule.forRoot([
        GetClientListEffects,
        GetUserListEffects,
        GetPermissionListEffects,
        
    ]),
],
exports:[StoreModule,EffectsModule]
})
export class AppStateModule{}

