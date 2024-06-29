import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  Navtabs:any=''
  //ng style
  textColor = 'red';

  onclick(value:any){
    this.Navtabs=value
  }
}
