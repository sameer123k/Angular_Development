import { Component } from '@angular/core';
import { AuthService } from '../../guard/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor( private auth: AuthService){

  }

  logout(){
    this.auth.islogout();
  }

storeValue:any = 'dashboard'

navToggle(abc:any){
  this.storeValue =abc
}

}
