import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { ClientListComponent } from './client-list/client-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ListViewComponent } from './list-view/list-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PermissionComponent } from './permission/permission.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NewUserlistComponent } from './new-userlist/new-userlist.component';
import { NewClientlistComponent } from './new-clientlist/new-clientlist.component';
import { NewPermissionComponent } from './new-permission/new-permission.component';
import { CombinedComponent } from './combined/combined.component';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [  
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AdminComponent,
    AddUserComponent,
    UsersListComponent,
    SearchPipe,
    ClientListComponent,
    ListViewComponent,
    PermissionComponent,
    NewUserlistComponent,
    NewClientlistComponent,
    NewPermissionComponent,
    CombinedComponent,
    DemoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    
  ],
  
  
})
export class AdminModule { }
