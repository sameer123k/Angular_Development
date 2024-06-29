import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { PermissionComponent } from './permission/permission.component';
import { NewUserlistComponent } from './new-userlist/new-userlist.component';
import { NewClientlistComponent } from './new-clientlist/new-clientlist.component';
import { NewPermissionComponent } from './new-permission/new-permission.component';
import { CombinedComponent } from './combined/combined.component';
import { DemoComponent } from './demo/demo.component';
const routes: Routes = [
  {path:'',component:AdminComponent,
   children:[
    { path:'dashboard',component:DashboardComponent},
    { path:'adduser',component:AddUserComponent},
    { path:'userslist',component:UsersListComponent},
    {path:'clientlist',component:ClientListComponent},
    {path:'listview',component:ListViewComponent},
    {path:'permission',component:PermissionComponent},
    {path:'newuserlist',component:NewUserlistComponent},
    {path:'newclientlist',component:NewClientlistComponent},
    {path:'newpermission',component:NewPermissionComponent},
    {path:'combined',component:CombinedComponent},
    {path:'demo',component:DemoComponent},
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
