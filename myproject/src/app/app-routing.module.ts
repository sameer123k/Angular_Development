import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"admin",loadChildren:()=>import ('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:"", loadChildren:()=>import ('./auth/auth.module').then(mod=>mod.AuthModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
