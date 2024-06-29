import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  startDate: any;


 Data:any
  constructor(private route:ActivatedRoute , private router:Router){
 this.Data = localStorage.getItem('SignupData')
 this.Data = JSON.parse(this.Data)
  }

  logout(){
    console.log('logout work')
    localStorage.clear();
    this.router.navigate(['/signup'])
  }

}
